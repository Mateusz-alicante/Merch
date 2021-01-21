var express = require('express')
var router = express.Router()
const { nonAdminAuth, AdminAuth } = require('../../Middleware/Auth')
const Post = require('../../db/Models/Post')



router.post('/savePost', AdminAuth, async (req, res) => {
  data = req.body
  post = new Post({...data, author: req.user})
  await post.save()
  res.send(post._id)
})

router.get('/loadPosts', async (req, res) => {
  page = req.query.page
  const posts = await Post.find({isPublic: true})
    .limit(10)
    .skip(page * 10)
    .select("-body -__v -views")
    .sort({createdAt: -1})
    
    res.send(posts)
})

router.get('/fetchPost', async (req, res) => {
  id = req.query.id
  const post = await Post.findOneAndUpdate({_id :id, isPublic: true}, {$inc : {'views' : 1}}).select(" -__v -views -isPublic").exec();
  // const post = await Post.find({_id: id}).select(" -__v -views")
  res.send(post)

})


router.get('/getUserPosts', AdminAuth, async (req, res) => {
  posts = await Post.find({ author: req.user }).exec()
  res.send(posts)
})

router.get('/fetchPostEditor', AdminAuth, async (req, res) => {
  id = req.query.id
  const post = await Post.findById(id).select(" -__v -views").exec();
  res.send(post)

})


router.post('/updatePost', AdminAuth, async (req, res) => {
  data = req.body
  post = await Post.findOneAndUpdate({_id: req.headers.id, author: req.user}, data).exec()
  res.status(200)
  res.send('Post updated')
})


  
module.exports = router