import { appState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { api, pokemonApi } from "./AxiosService.js"

class PokemonsService {
    async getMyPokemons() {
        const res = await api.get()
        console.log("get my poke", res.data);
        appState.myPokemons = res.data
    }
    async catchPoke() {
        let activePokemon = appState.activePokemon
        const res = await api.post('', activePokemon)
        console.log("catch poke", res.data);
        appState.myPokemons.unshift()
        console.log("is this in my appsate", appState.myPokemons);

    }
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