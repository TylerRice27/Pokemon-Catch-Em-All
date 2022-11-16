import { appState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonsService {
    async setActive(name) {
        const res = await pokemonApi.get(`pokemon/${name}`)
        console.log("Get this pokemon", res.data);
        appState.activePokemon = new PokeApiPokemon(res.data)
    }
    async getPokemons() {
        const res = await pokemonApi.get('pokemon?limit=20&offset=20')
        console.log("geting my pokemons from api", res.data);
        appState.pokemons = res.data.results
    }


}


export const pokemonsService = new PokemonsService()