let bcrypt = require('bcrypt');
let User = require('../models/user');
let saltRounds = 10;

const deleteUser = (data, request, response) => {
    User.findOne({login: data.login}).then(function (user) {
        if (user) {
            if (request.session.userId == user._id) {
                bcrypt.compare(data.password, user.password, function (err, result) {
                    User.deleteOne({login: data.login}).then((res) => {
                        if (res && request.session) {
                            request.session.destroy(function () {
                                response.send({
                                    result: true,
                                    message: 'User was logout',
                                    error: null
                                })
                            });
                        }
                    }).catch((err) => {
                        response.send({
                            result: false,
                            message: 'Not correct password',
                            error: err
                        });
                    });
                })
            } else {
                bcrypt.compare(data.password, user.password, function (err, result) {
                    if (result) {
                        User.deleteOne({login: data.login}).then((res) => {
                            if (res) {
                                response.send({
                                    result: true,
                                    message: 'User was delete',
                                    error: null
                                });
                            }
                        });
                    } else {
                        response.send({
                            result: false,
                            message: 'Not correct password',
                            error: err
                        });
                    }
                });
            }
        } else {
            response.send({
                result: false,
                message: null,
                error: 'User not found, please enter correct login and password'
            });
        }
    }).catch((err) => {
        response.send({
            result: false,
            message: null,
            error: 'User not found, please enter correct login and password'
        });
    });
};

const getUsers = (request, response) => {
    if (request.session.userId) {
        User.find().then((users) => {
            response.send({
                data: users,
                result: true,
                message: null,
                error: null
            })
        }).catch((err) => {
            response.send({
                result: false,
                message: null,
                error: err
            });
        })
    } else {
        response.send({
            result: false,
            message: null,
            error: 'User not login'
        });
    }
};

module.exports = {
    deleteUser,
    getUsers
};