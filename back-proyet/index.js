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



const PORT = process.env.PORT || 5000;
const server = express();



const {connectToDb} = require('./config/db')
connectToDb()

require('./passport')


//TODO: aqui va la configuracion del servidor



server.listen(PORT,()=>{
    console.log(`servidor arrancado en: ${PORT}`)
})