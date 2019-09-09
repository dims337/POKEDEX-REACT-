import React from 'react'
import Pokecard from '../Pokecard/Pokecard'
import './Pokedex.css'

const pokedex = (props) =>{
   let pokemon= [
        {id:4, name: 'charmander', type: 'fire', base_exp: 62},
        {id:7, name: 'squirtle', type: 'water', base_exp: 63},
        {id:11, name: 'metapod', type: 'bug', base_exp: 72},
        {id:12, name: 'butterfree', type: 'flying', base_exp: 178},
        {id:25, name: 'pikachu', type: 'electric', base_exp: 112},
        {id:39, name: 'jigglypuff', type: 'normal', base_exp: 95},
        {id:94, name: 'gengar', type: 'poison', base_exp: 225},
        {id:133, name: 'eevee', type: 'normal', base_exp: 65},
      ]
    return (
         <div className='Pokedex'>
            <h1>Pokedex!</h1>  
            <h4>total expr:{props.exp}</h4>
            <h2 className= {props.winner? "Pokedex-winner" : "Pokedex-looser"}>{props.winner? 'WINNING HAND' : 'LOOSING HAND'}</h2>
                 <div className='Pokedex-cards'>        
                   { props.pokemon.map((p) =>{
                       return(
                        <Pokecard 
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_exp}/>
                       )
                        
                   })}
                     </div>
            </div>
           
        
        )
     }

export default pokedex