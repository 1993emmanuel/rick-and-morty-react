import React from 'react'
import styled from 'styled-components'

const CharacterDescriptionstyled = styled.div`
    grid-area: character-description;
    .character-label {
        background: #685128;
        padding: 1em;
        color: white;
        border-radius: 10px;
        text-align: left;
        font-size: 25px;
        font-weight: 400;
      }      
`


function CharacterDescription({gender, species, status}){
    return(
        <CharacterDescriptionstyled>
            <div className="character-labels">
                <h3 className="character-label">Genero: {gender}</h3>
                <h3 className="character-label">Especie: {species}</h3>
                <h3 className="character-label">Estatus: {status}</h3>
            </div>
        </CharacterDescriptionstyled>
    )
}

export default CharacterDescription