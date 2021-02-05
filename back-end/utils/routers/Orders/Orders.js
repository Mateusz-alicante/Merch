var express = require('express')
var router = express.Router()
const { nonAdminAuth, AdminAuth } = require('../../Middleware/Auth')
const Order = require('../../db/Models/Order')
const Item = require('../../db/Models/Item')
const User = require('../../db/Models/User')
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);


// router.post('/new', nonAdminAuth, async (req, res) => {
//   try {
//     user_id = req.user.data
//     data = req.body

//     const user = await User.findById(user_id).select(" -__v -password")

//     items = await Item.find({
//       '_id': { $in: data.order.map(order => order.item) }
//     }).exec()
//     order = new Order({ order: data.order, author: req.user.data, authorData: user, amount: items.reduce((acc, item) => acc + item.price * data.order.find(order => order.item == item._id).quantity, 0) })
//     await order.save()
//     res.status(200)
//     res.send(order._id)
//   } catch (e) {
//     console.log(e)
//     res.status(400)
//     res.send(e)
//   }
// })


router.post('/buy', nonAdminAuth, async (req, res) => {
  try {
    user_id = req.user.data
    data = req.body
    const docs = await Promise.all([User.findById(user_id).select(" -__v -password").exec(), Item.find({'_id': { $in: data.order.map(order => order.item) }}).exec()])

    const user = docs[0]
    const items = docs[1]

    const amount =  items.reduce((acc, item) => acc + item.price * data.order.find(order => order.item == item._id).quantity, 0)
    const payment = await stripe.charges.create({
      amount: amount,
      currency: "EUR",
      description: "Vendemos camisetas personalizadas",
      // payment_method: data.token.card.id,
      // confirm: true,
      source: data.token.id
    });
    order = new Order({ order: data.order, author: req.user.data, authorData: user, amount, shipment: data.addresses })
    await order.save()
    res.status(200)
    res.send(order._id)
    console.log(payment)
  } catch (e) {
    console.log(e)
    res.status(400)
    res.send(e)
  }
})

router.get('/cancel', nonAdminAuth, async (req, res) => {
  user_id = req.user.data
  id = req.query.id

  const user = await User.findById(user_id)
  const order = await Order.findById(id)

  if (order.author !== user_id && !user.isAdmin) {
    res.status(400)
    res.send("Not Authorized")
  }
  order.status = "Cancelled"
  await order.save()

  res.status(200)
  res.send("Cancelled Order")
})

router.post('/loadMyOrders', nonAdminAuth, async (req, res) => {
  const orders = await Order.find({ author: req.user.data })
    .select(" -__v -author")

  res.send(orders)
})

router.post('/loadAllOrders', AdminAuth, async (req, res) => {

  let orders = await Order.find()
  if (req.body == {}) {
    return res.send(orders)
  } else {
    if (req.body.name) {
      const matching = order.filter(OWA => OWA.author.name.toLowerCase().includes(req.body.name.toLowerCase()))
      orders = orders.filter(order => matching.map(OWA => OWA.order._id).includes(order._id))
    }

    if (req.body.email) {
      const matching = OrderWithAuthor.filter(OWA => OWA.author.email.toLowerCase().includes(req.body.email.toLowerCase()))
      orders = orders.filter(order => matching.map(OWA => OWA.order._id).includes(order._id))
    }

    if (req.body.year) {
      const matching = OrderWithAuthor.filter(OWA => OWA.author.year.toString().toLowerCase().includes(req.body.year.toLowerCase()))
      orders = orders.filter(order => matching.map(OWA => OWA.order._id).includes(order._id))
    }

    if (req.body.section) {
      const matching = OrderWithAuthor.filter(OWA => OWA.author.section.toLowerCase().includes(req.body.section.toLowerCase()))
      orders = orders.filter(order => matching.map(OWA => OWA.order._id).includes(order._id))
    }


    res.status(200)
    return res.send(orders)
  }
})

router.get('/fulfill', AdminAuth, async (req, res) => {
  id = req.query.id
  await Order.findByIdAndUpdate(id, { status: "Fulfilled" })

  res.status(200)
  res.send("Order has been fulfilled")
})

router.get('/fetchOrder', nonAdminAuth, async (req, res) => {
  user_id = req.user.data
  id = req.query.id
  const order = await Order.findById(id).exec();
  if (order.author == req.user.data) {
    res.status(200)
    return res.send(order)
  }
  const user = await User.findById(user_id)

  if (user.isAdmin) {
    res.status(200)
    return res.send(order)
  } else {
    res.status(401)
    res.send("Not authorized to fetch this order")
  }
})



module.exports = router