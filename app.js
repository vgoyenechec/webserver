const express = require('express')
const hbs = require('hbs');
require('dotenv').config();


const app = express()

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log(err);});




//Servir contenido estático
app.use(express.static('public',{extensions:['html']})) 

// app.get('/', function (req, res) {  //como está usando la carpeta publica no sirve este URL
//   res.send('Home page')
// })

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Valentina Goyeneche', 
        titulo: 'Curso de Node'
    })
  })

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Valentina Goyeneche', 
        titulo: 'Curso de Node'
    })
  })

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Valentina Goyeneche', 
        titulo: 'Curso de Node'
    })
  })


app.get('/hola', function (req, res) {
    res.send('Hello World')
  })
  app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/back/404.html')
  })
 
app.listen(process.env.PORT)