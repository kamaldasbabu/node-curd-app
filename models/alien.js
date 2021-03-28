const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        default: "2345"
    }
});

module.exports = mongoose.model('User', alienSchema);
