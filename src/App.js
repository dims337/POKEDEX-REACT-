import React, {Component} from 'react';
import './App.css';
import Pokedex from './Pokedex/Pokedex'
import Pokecard from './Pokecard/Pokecard'
import Pokegame from './Pokegame/Pokegame';

class App extends Component{

  state= {
    pokemon:[
      {id:4, name: 'charmander', type: 'fire', base_exp: 62},
      {id:7, name: 'squirtle', type: 'water', base_exp: 63},
      {id:11, name: 'metapod', type: 'bug', base_exp: 72},
      {id:12, name: 'butterfree', type: 'flying', base_exp: 178},
      {id:25, name: 'pikachu', type: 'electric', base_exp: 112},
      {id:39, name: 'jigglypuff', type: 'normal', base_exp: 95},
      {id:94, name: 'gengar', type: 'poison', base_exp: 225},
      {id:133, name: 'eevee', type: 'normal', base_exp: 65},
    ]
  }

  render(){


    return (
      <div className='App'>
        <Pokegame/>
         
      </div>
     
    )
  }
}

export default App;
