var express = require('express')
var router = express.Router()
const { nonAdminAuth, AdminAuth } = require('../../Middleware/Auth')
const Order = require('../../db/Models/Order')
const Item = require('../../db/Models/Item')
const User = require('../../db/Models/User')



router.post('/new', nonAdminAuth, async (req, res) => {
  try {
    data = req.body
    items = await Item.find({
      '_id': { $in: data.order.map(order => order.item)}}).exec()
    order = new Order({ order: data.order, author: req.user.data, amount: items.reduce((acc, item) => acc + item.price * data.order.find(order => order.item == item._id).quantity, 0)})
    await order.save()
    res.status(200)
    res.send(order._id)
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

router.get('/loadMyOrders', nonAdminAuth, async (req, res) => {
  const orders = await Order.find({ author: req.user.data })
    .select(" -__v -author")

  res.send(orders)
})

router.get('/fulfill', AdminAuth, async (req, res) => {
  id = req.query.id
  await Order.findByIdAndUpdate(id, {status: "Fulfilled"})

  res.status(200)
  res.send("Order has been fulfilled")
})

router.get('/fetchOrder', nonAdminAuth, async (req, res) => {
  user_id = req.user.data
  id = req.query.id
  const order = await Order.findById(id).exec();
  if ( order.author == req.user.data ) {
    res.status(200)
    res.send(order)
  } else {
    res.status(400)
    res.send("Not authorized to fetch this order")
  }
})



module.exports = router