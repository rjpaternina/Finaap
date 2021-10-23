const express = require('express')
const morgan = require('morgan')
const mongoose= require('mongoose')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/auth.routes')

//CONFIGURACIONES
app.set('port', process.env.PORT || 3000)


//MIDDLEWARES
app.use (morgan ('dev'))
app.use (cors())

//RUTAS
app.use('/auth', authRoutes)

//INICIO DEL SERVIDOR
app.listen(app.get('port'), ()=>{
    console.log('Server Running')
})