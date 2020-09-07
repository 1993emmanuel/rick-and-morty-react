import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './character'
import CharacterName from './character-name'
import CharacterImage from './character-image'
import CharacterDescription from './character-description'
import CharacterPlaceholder from './character-placeholder'
import API from './api'

const api = new API()

function App() {

  const [character, setCharacter] = useState({})
  useEffect(()=>{
    async function getCharacter(){
      setCharacter(await api.getCharacter(1))
    }
    getCharacter()
  },[])


  return (
    <div className="App">

      <CharacterPlaceholder name={character.name} />

      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>

        <img src="" width="280" className="logo" />

        <div className="soscial">
          <a href="#"><img src="/images/facebook.svg" /><img src="#" /></a>
          <a href="#"><img src="#" /><img src="#" /></a>
          <a href="#"><img src="#" /><img src="#" /></a>
        </div>

        <div className="navigation name"><a href="#">NAME</a></div>
          <CharacterName name={character.name} />

          {/* inicio del componente de imagen */}
          <CharacterImage image={character.image} name={character.name} />
          {/* Final del componente de imagen */}

        <div className="navigation about"><a href="#">ABOUT</a></div>
        
        <CharacterDescription gender={character.gender} species={character.species} status={character.status} />
        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div className="learn-more"><span>Learn More</span></div>

        <div className="arrow" id="load-next"></div>

      </div>

    </div>
  );
}

export default App;
