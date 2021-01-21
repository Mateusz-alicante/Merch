var express = require('express')
var router = express.Router()

const { nonAdminAuth, AdminAuth } = require('../../Middleware/Auth')

// const toS3 = require('./ToS3')

// middleware that is specific to this router
// const fileUpload = require('express-fileupload')

// router.use(fileUpload())

// define the home page route
router.post('/upload',AdminAuth, async (req, res) => {
    // const url = await toS3(req.files.upload)
    res.json({
      url: "https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg"
    })
})


  
module.exports = router