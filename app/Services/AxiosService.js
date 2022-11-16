export const api = axios.create({
    BaseURL: 'https://bcw-sandbox.herokuapp.com/api/tyler/pokemon',
    timeout: 12000
})

export const pokemonApi = axios.create({
    BaseURL: 'https://pokeapi.co',
    timeout: 8000
})