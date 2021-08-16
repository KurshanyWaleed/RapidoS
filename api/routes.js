const express = require('express')
const route = express.Router();
const { signUp, signIn } = require('./controllers/auth.controler')
const { addReq } = require('./controllers/requests.controller')
const { addEmployee } = require('./controllers/adminController/employee.controller')



route.get('/signin', signIn);
route.post('/addRequest', addReq);
route.post('/addEmpolyee', addEmployee);
route.post('/signup', signUp);

module.exports = route;