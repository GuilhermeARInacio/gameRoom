const router = require('express').Router()
const bodyParser = require('body-parser')
const pokemonApi = require('../dao/pokemon')

router.get('/pokemon/:id', async (req, res) => {
    try{
        const id = req.params.id
        const jsonResult = await pokemonApi.buscaPokemon(id)
        res.status(200)
        res.send(jsonResult)
    }
    catch(erro){
        res.status(404)
        res.send("Pokemón não encontrado, verifique se o código da PokeDex ou o nome estão corretos e tente novamente!")
    }
})

router.get('/type/:id', async (req, res) => {
    try{
        const id = req.params.id
        const jsonResult = await pokemonApi.buscaTipo(id)
        res.status(200)
        res.send(jsonResult)
    }
    catch(erro){
        res.status(404)
        res.send("Tipo não encontrado, verifique se o código ou o nome estão corretos e tente novamente!")
    }
})

router.get('/game/:id', async (req, res) => {
    try{
        const id = req.params.id
        const jsonResult = await pokemonApi.buscaGame(id)
        res.status(200)
        res.send(jsonResult)
    }
    catch(erro){
        res.status(404)
        res.send("Game não encontrado, verifique se o código ou o nome estão corretos e tente novamente!")
    }
})

module.exports = router