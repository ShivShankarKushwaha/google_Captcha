const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const env= require('../config/env');
const path =require('path');


const sessionStore = MongoStore.create({
    mongoUrl: env.MONGO_LINK,
    collectionName: 'sessions',
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie:
    {
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'none',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: process.env.NODE_ENV === 'production',
        maxAge: 3600000,
    }
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'../dist')));
}

module.exports = app;