import React from 'react'
import styled from 'styled-components'

const CharacterImagestyled = styled.div`
    grid-area: avatar;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        .character-image-container img{
            /* display: none; */
        }
    }    


`


function CharacterImage({image, name}){
    return(
        <CharacterImagestyled>
            <img src={image} className="character-image" alt={name} />
        </CharacterImagestyled>
    )
}

export default CharacterImage