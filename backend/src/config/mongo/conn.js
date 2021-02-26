const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fullstackeletro', {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true,  
    useFindAndModify: false 
});

mongoose.Promise = global.Promise;


module.exports = mongoose;