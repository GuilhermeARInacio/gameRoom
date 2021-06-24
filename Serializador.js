class Serializador {

    constructor (api) {
        this.api = api
    }

    pokemon() {
        
        const arrayHabilidades = this.api.data.abilities
        
        let habilidades = '['  
        for (let index = 0; index < arrayHabilidades.length; index++) {
            habilidades = habilidades.concat(`'${this.api.data.abilities[index].ability.name}'`) 
            if(index !== arrayHabilidades.length - 1){
                habilidades = habilidades.concat(',')
            }
        }

        const weight = this.api.data.weight
        const height = this.api.data.height
        const nome = this.api.data.species.name
        let arrayTipos = this.api.data.types
        
        let tipos = '['  
        for (let index = 0; index < arrayTipos.length; index++) {
            tipos = tipos.concat(`'${this.api.data.types[index].type.name}'`) 
            if(index !== arrayTipos.length - 1){
                tipos = tipos.concat(',')
            }
        }
        tipos = tipos.concat(']')
        const jsonResult = `{ 
                                "Nome" : "${nome}",
                                "Tipos" : "${tipos}",
                                "Peso" : "${weight}KG",
                                "Altura" : "${height}M",
                                "Habilidades" : "${habilidades}"
                            }`

        return jsonResult                        
    }

    type() {
        const tipo = this.api.data.name
        const id = this.api.data.id
        
        let arraySofreDanoDuplo = this.api.data.damage_relations.double_damage_from
        let sofreDanoDuplo = '['  
        for (let index = 0; index < arraySofreDanoDuplo.length; index++) {
            sofreDanoDuplo = sofreDanoDuplo.concat(`'${this.api.data.damage_relations.double_damage_from[index].name}'`) 
            if(index !== arraySofreDanoDuplo.length - 1){
                sofreDanoDuplo = sofreDanoDuplo.concat(',')
            }
        }
        sofreDanoDuplo = sofreDanoDuplo.concat(']')

        let arrayDaDanoDuplo = this.api.data.damage_relations.double_damage_to
        
        let daDanoDuplo = '['  
        for (let index = 0; index < arrayDaDanoDuplo.length; index++) {
            daDanoDuplo = daDanoDuplo.concat(`'${this.api.data.damage_relations.double_damage_to[index].name}'`) 
            if(index !== arrayDaDanoDuplo.length - 1){
                daDanoDuplo = daDanoDuplo.concat(',')
            }
        }
        daDanoDuplo = daDanoDuplo.concat(']')

        let arraySofreMetadeDano = this.api.data.damage_relations.half_damage_from
        
        let sofreMetadeDano = '['  
        for (let index = 0; index < arraySofreMetadeDano.length; index++) {
            sofreMetadeDano = sofreMetadeDano.concat(`'${this.api.data.damage_relations.half_damage_from[index].name}'`) 
            if(index !== arraySofreMetadeDano.length - 1){
                sofreMetadeDano = sofreMetadeDano.concat(',')
            }
        }
        sofreMetadeDano = sofreMetadeDano.concat(']')

        let arrayDaMetadeDano = this.api.data.damage_relations.half_damage_to
        
        let daMetadeDano = '['  
        for (let index = 0; index < arrayDaMetadeDano.length; index++) {
            daMetadeDano = daMetadeDano.concat(`'${this.api.data.damage_relations.half_damage_to[index].name}'`) 
            if(index !== arrayDaMetadeDano.length - 1){
                daMetadeDano = daMetadeDano.concat(',')
            }
        }
        daMetadeDano = daMetadeDano.concat(']')

        let arrayNaoSofreDano = this.api.data.damage_relations.no_damage_from
        
        let naoSofreDano = '['  
        for (let index = 0; index < arrayNaoSofreDano.length; index++) {
            naoSofreDano = naoSofreDano.concat(`'${this.api.data.damage_relations.no_damage_from[index].name}'`) 
            if(index !== arrayNaoSofreDano.length - 1){
                naoSofreDano = naoSofreDano.concat(',')
            }
        }
        naoSofreDano = naoSofreDano.concat(']')

        let arrayNaoDaDano = this.api.data.damage_relations.no_damage_to
        
        let naoDaDano = '['  
        for (let index = 0; index < arrayNaoDaDano.length; index++) {
            naoDaDano = naoDaDano.concat(`'${this.api.data.damage_relations.no_damage_to[index].name}'`) 
            if(index !== arrayNaoDaDano.length - 1){
                naoDaDano = naoDaDano.concat(',')
            }
        }
        naoDaDano = naoDaDano.concat(']')

        const jsonResult = `{ 
                                "Tipo" : "${tipo}",
                                "id" : "${id}",
                                "Sofre dano duplo de" : "${sofreDanoDuplo}",
                                "Da dano duplo em" : "${daDanoDuplo}",
                                "Sofre metade do dano de" : "${sofreMetadeDano}",
                                "Da metade do dano em" : "${daMetadeDano}",
                                "Não sofre dano de" : "${naoSofreDano}",
                                "Não da dano em" : "${naoDaDano}"
                            }`

        return jsonResult                        
    }

    game() {
        
        const nome = this.api.data.name
        const id = this.api.data.id
        let grupo = this.api.data.version_group.name

        const jsonResult = `{ 
                                "Nome" : "${nome}",
                                "Id" : "${id}",
                                "Grupo" : "${grupo}"
                            }`

        return jsonResult                        
    }
}

module.exports = Serializador