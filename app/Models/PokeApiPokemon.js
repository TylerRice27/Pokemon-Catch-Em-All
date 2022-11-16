export class PokeApiPokemon {
    constructor(data) {
        this.name = data.name
        this.types = data.types
        this.img = data.back_default
        this.ability = data.ability
    }


    get Template() {
        return `<button class="btn btn-danger m-1">${this.name}</button>`
    }

}