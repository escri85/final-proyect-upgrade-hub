const express = require('express');
const path = require('path');
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const dotenv = require('dotenv').config({path:'./.env.local'})

//rutas de productos y usuario
const userRouter = require('./routes/user.routes')
const productRouter =require('./routes/product.routes')

// const PORT = process.env.PORT || 5000;
const PORT = 3001;
const server = express();

const {connectToDb} = require('./config/db')
connectToDb()

require('./passport')

//TODO: aqui va la configuracion del servidor

//Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Rutas
server.use('/', productRouter);
server.use('/user/', userRouter);

//Error
server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
    })

server.use((err, req, res, next) => {
    console.log(err);
    return res.status(err.status || 500).json(err);
    });

server.listen(PORT,()=>{
    console.log(`servidor arrancado en: ${PORT}`)
})