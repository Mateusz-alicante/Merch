const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

// require dependency files
require('dotenv').config()

app.use(express.static(path.join(__dirname, '/../front-end/build')));
app.set('trust proxy', 1);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/test', (req, res) => {
    console.log("Test request recieved")
    res.send('this text is comming from the back-end')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../front-end/build/index.html'));
});


// Liste on specified port
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})