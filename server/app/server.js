let express = require('express');
let mongoose = require('mongoose');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);
let app = express();
let config = require('../configs/config');

/*Create session*/
app.use(
    session({
        secret: config.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    })
);

/*Connect router*/
app.use(require('../routers/api'));

/*Start server*/
app.listen(8080, function () {
    console.log('server started in port 8080');
});