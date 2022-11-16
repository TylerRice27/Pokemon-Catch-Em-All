import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"

export class PokemonsController {
    constructor() {
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

}