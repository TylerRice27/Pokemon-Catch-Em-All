import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class PokeApiPokemon {
    constructor(data) {
        this.id = generateId() || data.id || ''
        this.name = data.name
        this.type = data.types
        this.img = data.sprites.back_default
        this.ability = data.abilities
    }


    get Template() {
        return `
        <button class="btn btn-danger m-1">${this.name}</button>`
    }



    get ActiveTemplate() {

        return `
        <div class="text-center">
            <img class="poke-main" src="${this.img}">
            <h2 class="text-light">Name: ${this.name}</h2>
            <h5 class="text-light">Type: ${this.TypesOut}</h5>
            <h5 class="text-light">Abilities: ${this.FormatAbility}</h5>
            ${this.ComputeButtons}
        </div>
     
              `
    }

    get TypesOut() {
        let template = ''
        this.type.forEach(t => template += t.type.name)
        return template
    }

    get ComputeButtons() {
        if (this.id) {
            return `<button onclick="app.pokemonsController.letGo()" class="btn btn-danger">Release!</button>`
        } else {
            return `<button onclick="app.pokemonsController.catchPoke()" class="btn btn-danger">Catch!</button>`
        }
    }


    get FormatAbility() {
        let template = ''
        this.ability.forEach(a => template += a.ability.name)
        return template
    }


}