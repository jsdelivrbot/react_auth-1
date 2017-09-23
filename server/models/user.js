const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String
    }
});

// create the model class
const ModelClass = mongoose.model('user', userSchema);

// export model
module.exports = ModelClass;
