import { pokemonApi } from "./AxiosService.js"

class PokemonsService {
    async getPokemons() {
        const res = await pokemonApi.get('pokemon?limit=20&offset=20')
        console.log("geting my pokemons from api", res.data);
    }


}


export const pokemonsService = new PokemonsService()