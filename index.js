//libs
const express = require('express')
const bodyParser = require('body-parser')

//Routers
const routerLib = require('./routers/libraryRouter')
const routerWishList = require('./routers/WishListRouter')

//config
const app = express()
app.use(bodyParser.json)

app.use('/library', routerLib)
app.use('/wishlist', routerWishList)

app.listen(3000, () => {console.log('Api listen in port 3000')})