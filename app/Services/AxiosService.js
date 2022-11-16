export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/tyler/pokemon',
    timeout: 12000
})

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 8000
})