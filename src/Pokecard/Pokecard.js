import React from 'react';
import './Pokecard.css'

const POKE_API='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
let padToThree = (number) =>(number<= 999 ? `00${number}`.slice(-3):number)
const pokecard = (props)=>{
    let imSrc = `${POKE_API}${padToThree(props.id)}.png`
    return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{props.name}</h1>
                <div className='Pokecard-img'><img src={imSrc}/></div>
                <div className='Pokecard-data'>type:{props.type}</div>
                <div className='Pokecard-data'>exp:{props.exp}</div>
            </div>
    )
}

export default pokecard