const mongoose = require('mongoose');
require('dotenv').config()

mongoose.Promise = global.Promise;

// const url = "your url here"
// Connect MongoDB at default port 27017.
let mong = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
