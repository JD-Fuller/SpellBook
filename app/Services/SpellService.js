import store from "../store.js";
import Spell from "../Models/Spell.js"


let _spellsApi = axios.create ({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/spells'
})

let _sandbox = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jdfuller/spells'
})
class SpellsService {

  constructor(){
console.log("hello from the spell service")
this.getMySpellsAsync();
  }

  async _getApiSpellsAsync(){
    //Retrieve spell from API
    let res = await _spellsApi.get('') 
    //set 'res' to the data from the API
      store.commit('apiSpells', res.data) 
      //sending data to the store..should be in the store now
      console.log("from the getApiSpells", res.data) 
      //print it out to test it
      console.log("just the res from getApiSpells", res)
    }

  async selectSpellAsync(id){ //Grab an individual spell from the list
    let res = await _spellsApi.get(id)
    debugger
    console.log("from the selectspellasync", res)
    let theActiveSpell = new Spell(res.data);//creating new instance of Spell, calling it activeSpell, filled with data
    store.commit("activeSpell", theActiveSpell);//Commit new instance to store
    console.log("from store.activeSpell", store.State.activeSpell)

  }

  async addSpellAsync() {
    let spell = store.State.activeSpell
    let res = await _sandbox.post("", spell)
    console.log("addSpellAsync", spell)
    this.getMySpellsAsync();

  }

  async getMySpellsAsync(){
    let res = await _sandbox.get()
    store.commit("mySpells", res.data.data.map(s => new Spell(s)))
    console.log("my spells", store.State.mySpells)
  }

}

const service = new SpellsService();
export default service;
