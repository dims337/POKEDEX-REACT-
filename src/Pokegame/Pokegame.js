import React from 'react';
import Pokedex from '../Pokedex/Pokedex'


const pokegame = (props)=>{

    const pokemon = [
        {id:4, name: 'charmander', type: 'fire', base_exp: 62},
        {id:7, name: 'squirtle', type: 'water', base_exp: 63},
        {id:11, name: 'metapod', type: 'bug', base_exp: 72},
        {id:12, name: 'butterfree', type: 'flying', base_exp: 178},
        {id:25, name: 'pikachu', type: 'electric', base_exp: 112},
        {id:39, name: 'jigglypuff', type: 'normal', base_exp: 95},
        {id:94, name: 'gengar', type: 'poison', base_exp: 225},
        {id:133, name: 'eevee', type: 'normal', base_exp: 65},
      ]

      let hand1 = [];
      let hand2 = [...pokemon];
      while (hand1.length < hand2.length){
          let randIdx= Math.floor(Math.random()*hand2.length)
          let randPokemon = hand2.splice(randIdx,1)[0];
          hand1.push(randPokemon)
      }
       let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_exp, 0) 
       let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_exp, 0)
      
    return(
        <div>
             <div>
                 
             </div>
             <Pokedex pokemon={hand1} exp={exp1} winner={exp1>exp2}/>
             <Pokedex pokemon={hand2} exp={exp2} winner={exp2>exp1}/>
        </div>
       
    )
}

export default pokegame;