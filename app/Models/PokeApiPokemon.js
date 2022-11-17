export class PokeApiPokemon {
    constructor(data) {
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
         <img src="${this.img}">
          <h2>${this.name}</h2>
          <h5>${this.TypesOut}</h5>
          <h5>${this.FormatAbility}</h5>
        `
    }

    get TypesOut() {
        let template = ''
        this.type.forEach(t => template += t.type.name)
        return template
    }


    get FormatAbility() {
        let template = ''
        this.ability.forEach(a => template += a.ability.name)
        return template
    }


}