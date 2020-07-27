import store from "../store.js";
import service from "../Services/SpellService.js";

//Private
function _drawApiSpells() {
  let template = "";
  let spells = store.State.apiSpells;
  spells.forEach(
    s =>
      (template += `<li onclick="app.spellController.selectSpellAsync('${s.id}')">${s.name}</li>`)
  );
  document.getElementById("spells").innerHTML = template;
}

function _drawActiveSpell() {
  let spell = store.State.activeSpell;
  document.getElementById("active").innerHTML = spell.Template;
}

function _drawMySpells() {
  let template = "";
  let spells = store.State.mySpells;
  spells.forEach(
    s =>
      (template += `<li onclick="app.spellcontroller.selectMySpellAsync('${s.id}')">${s.name}</li>`)
  );
  document.getElementById("mySpells").innerHTML = template;
}

//Public
export default class SpellController {
  constructor() {
    console.log("Hello from the controller");
    store.subscribe("apiSpells", _drawApiSpells);
    store.subscribe("activeSpell", _drawActiveSpell);
    store.subscribe("mySpells", _drawMySpells);
    service._getApiSpellsAsync(); //run the get spells async
  }

  async selectSpellAsync(id) {
    debugger;
    try {
      await service.selectSpellAsync(id);
    } catch (error) {
      debugger;
      console.error(error);
    }
  }

  async addSpellAsync() {
    try {
      await service.addSpellAsync();
    } catch (error) {
      console.error(error);
    }
  }
}
