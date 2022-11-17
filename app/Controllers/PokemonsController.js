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

function _drawActive() {
    let pokemon = appState.activePokemon
    setHTML('active-poke', pokemon.ActiveTemplate)
}

function _drawMyPokemon() {
    let myPoke = appState.myPokemons
    let template = ''
    myPoke.forEach(p => template += `<button onclick="app.pokemonsController.setActive('${p.name}')" class="btn btn-danger rounded m-2 p-3">${p.name}</button>`)
    setHTML('my-list', template)
}

export class PokemonsController {
    constructor() {
        appState.on('pokemons', _drawPokemons)
        appState.on('activePokemon', _drawActive)
        appState.on('myPokemons', _drawMyPokemon)
        this.getPokemons()
        this.getMyPokemons()
    }


    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async getMyPokemons() {

        try {
            debugger
            await pokemonsService.getMyPokemons()
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

    async catchPoke() {
        try {
            await pokemonsService.catchPoke()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

}