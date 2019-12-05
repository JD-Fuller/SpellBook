import store from "../store.js";
import service from "../Services/SpellService.js";



//Private
function _drawApiSpells() { 
  let template = ''
  let spells = store.State.apiSpells;
  spells.forEach(s => template += `<li onclick="app.spellController.selectSpellAsync('${s.id}')">${s.name}</li>`)
  document.getElementById("spells").innerHTML = template
  console.log("from the _drawApiSpells", spells);
}

function _drawActiveSpell(){ 
  let spell = store.State.activeSpell;
    document.getElementById("active").innerHTML = spell.Template
  }

//Public
export default class SpellController {
  constructor() {
    store.subscribe("apiSpells", _drawApiSpells);
    store.subscribe("activeSpell", _drawActiveSpell)
    service._getApiSpellsAsync(); //run the get spells async 
    service.selectSpellAsync();
    _drawActiveSpell();
    _drawApiSpells(); // draw spells onto the sreen
  }

  async selectSpellAsync(id){
    debugger
    try {
      await service.selectSpellAsync(id)
    } catch (error) {
      debugger
      console.error(error)
    }
  }
  
}
