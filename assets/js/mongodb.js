const mongoose = require('mongoose');
const uri = "mongodb+srv://github:YW1K1HXNnv982PWn#t@cluster0.8xwql.mongodb.net/SignedUpevents?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err => console.log(err)))