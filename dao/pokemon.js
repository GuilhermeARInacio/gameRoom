const axios = require('axios')
const Serializador = require('../Serializador')

module.exports = {

    async buscaPokemon (id) {
        const dados = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const serializador = new Serializador(dados)
        return serializador.pokemon()
    },
    async buscaTipo (id) {
        const dados = await axios.get(`https://pokeapi.co/api/v2/type/${id}`)
        const serializador = new Serializador(dados)
        return serializador.type()
    },
    async buscaGame (id) {
        const dados = await axios.get(`https://pokeapi.co/api/v2/version/${id}`)
        const serializador = new Serializador(dados)
        return serializador.game()
    }
}