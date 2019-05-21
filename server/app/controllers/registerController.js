let bcrypt = require('bcrypt');
let User = require('../models/user');
let saltRounds = 10;

const createNewUser = function (data, response) {
    if (data.password !== data.repeat_password) {
        response.send({
            result: false,
            message: null,
            error: 'Repeat password not correct'
        });
    } else {
        bcrypt.hash(data.password, saltRounds, function (err, hash) {
            User.findOne({
                login: data.login,
            }).then(function (user) {
                if (!user) {
                    User.create({
                        title: 'Title for ' + data.login,
                        description: 'This is description ' + data.login,
                        createdAt: new Date(),
                        login: data.login,
                        password: hash
                    });

                    response.send({
                        result: true,
                        message: 'User was created',
                        error: null
                    });
                } else {
                    response.send({
                        result: false,
                        message: null,
                        error: 'This user already exists.'
                    });
                }
            }).catch(function (err) {
                response.send({
                    result: false,
                    message: null,
                    error: 'User was not created'
                })
            });
        });
    }
};

module.exports = createNewUser;