const express = require('express')

//Routers
const routerConsulta = require('./routers/pokedexRouter')

//config
const app = express()

app.use('/pokedex', routerConsulta)

app.listen(3000, () => {console.log('Api listen in port 3000')})