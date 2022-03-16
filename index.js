const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

// Configuracion
app.set('port', process.env.PORT || 8080)
app.set('json space', 4)


// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// Routes
app.use('/api/productos', require('./route/rutaProducto'))


//Static Files
app.use('/static', express.static(path.join(__dirname + '/public')))


// Inicio del Servidor
const server = app.listen(app.get('port'), () => {
    console.log(`Servidor http escuchando en el puerto ${app.get('port')}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))