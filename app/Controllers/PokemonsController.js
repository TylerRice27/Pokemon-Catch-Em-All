import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPokemons() {
    let pokemons = appState.pokemons
    let template = ''
    pokemons.forEach(p => template += `<button onclick="app.pokemonsController.setActive('${p.name}')" class="btn btn-danger rounded m-2 p-3">${p.name}</button>`)
    setHTML('poke-list', template)
}

export class PokemonsController {
    constructor() {
        appState.on('pokemons', _drawPokemons)
        this.getPokemons()
    }


    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async setActive(pokemon) {
        try {
            await pokemonsService.setActive(pokemon)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

}