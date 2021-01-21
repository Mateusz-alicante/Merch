const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {useNewUrlParser: true, useFindAndModify: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to databse')
});