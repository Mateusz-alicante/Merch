var express = require('express')
var router = express.Router()
const { nonAdminAuth, AdminAuth } = require('../../Middleware/Auth')
const Item = require('../../db/Models/Item')



router.post('/saveItem', AdminAuth, async (req, res) => {
  try {
    data = req.body
    item = new Item({ ...data, author: req.user })
    await item.save()
    res.status(200)
    res.send(item._id)
  } catch (e) {
    res.statusCode(400)
    res.send(e)
  }
})

router.get('/loadItems', async (req, res) => {
  const items = await Item.find({ visible: true, inStock: true })
    .select("-body -__v -views")

  res.send(items)
})

router.get('/fetchItem', async (req, res) => {
  id = req.query.id
  const item = await Item.findOneAndUpdate({ _id: id, visible: true }, { $inc: { 'views': 1 } }).select(" -__v -views -visible -inStock -createdAt").exec();
  // const post = await Post.find({_id: id}).select(" -__v -views")
  res.send(item)

})


// router.get('/getUserPosts', AdminAuth, async (req, res) => {
//   posts = await Post.find({ author: req.user }).exec()
//   res.send(posts)
// })

// router.get('/fetchPostEditor', AdminAuth, async (req, res) => {
//   id = req.query.id
//   const post = await Post.findById(id).select(" -__v -views").exec();
//   res.send(post)

// })


// router.post('/updatePost', AdminAuth, async (req, res) => {
//   data = req.body
//   post = await Post.findOneAndUpdate({_id: req.headers.id, author: req.user}, data).exec()
//   res.status(200)
//   res.send('Post updated')
// })



module.exports = router