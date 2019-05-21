let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let prepareFormData = require('../app/helpers/prepareDataFromRequest');
let createNewUser = require('../app/controllers/registerController');
let {deleteUser, getUsers} = require('../app/controllers/userController');
let {loginUser, logoutUser, checkAuth} = require('../app/controllers/loginController');
let urlencodedParser = bodyParser.urlencoded({extended: false});

// Define the home page route
router.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let data = prepareFormData(request.body);

    createNewUser(data, response);
});

router.post("/login", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let data = prepareFormData(request.body);

    loginUser(data, request, response);
});

router.get("/logout", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let data = prepareFormData(request.body);

    logoutUser(data, request, response);
});

router.get("/checkAuth", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    checkAuth(request, response);
});

router.post("/delete", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let data = prepareFormData(request.body);
    deleteUser(data, request, response);
});

router.get("/getUsers", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);

    getUsers(request, response);
});

module.exports = router;

