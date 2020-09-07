import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import API from './api'

const api = new API()
const CharacterStyled = styled.div`
`

function Character({name}){
    // const [character, setCharacter] = useState({})
    // useEffect(()=>{
    //     async function getCharacter(){
    //         setCharacter(await api.getCharacter(1))
    //         // const character = await api.getCharacter(1)
    //         console.log(character)
    //     }
    //     getCharacter()
    // },[])

    return(
        <CharacterStyled>
            {name}
            {/* esto es componenete character */}
        </CharacterStyled>
    )
}


export default Character