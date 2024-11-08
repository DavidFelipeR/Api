import React, { useEffect, useState } from 'react';
import './CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]); 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error("Error fetching characters");
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      <h1>Rick and Morty Characters</h1>
      <div className="characters">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} className="character-image" />
            <div className='container'>
            <h2>{character.name}</h2>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;