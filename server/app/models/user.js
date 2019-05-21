let mongoose = require('mongoose');
let Shema = require('../database');

let users = new Shema({
    title: String,
    description: String,
    createdAt: Date,
    login: String,
    password: {type: String}
});

let User = mongoose.model('User', users);

module.exports = User;




