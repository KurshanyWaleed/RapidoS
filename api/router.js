const express = require('express')
const route = express.Router();
const { signUp, signIn } = require('./controllers/auth.controler')



route.get('/signin', signIn);
route.post('/signup', signUp);

module.exports = route;