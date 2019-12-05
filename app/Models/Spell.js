export default class Spell {
    constructor(data) {
        this.name = data.name
        this.id = data.id || data._id
        this.title = data.title || ''
        this.range = data.range
        this.duration = data.duration
        this.casting_time = data.casting_time
        this.level = data.level
        this.school = data.school
        this.description = data.description || data.desc
        // this.desc = data.desc
    }

    get Template() {
        return 
        `
        <div class="card text-center" >
                  <div class="card-body" style="text-center">
                    <h4 class="card-title">${this.name}</h4>
                    <p class="card-text">Range: ${this.range}</p>
                    <p class="card-text">Duration: ${this.duration}</p>
                    <p class="card-text">Casting Time: ${this.casting_time}</p>
                    <p class="card-text">Level: ${this.level}</p>
                    <p class="card-text">School: ${this.school}</p>
                    <p class="card-text">School: ${this.description}</p>

                    <button onclick="app.spellController.
                  </div>
                </div>
                `
    }
}