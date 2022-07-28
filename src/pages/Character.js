import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

import * as Styled from "./CardStyled"

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
  }
`;

const DivInfo = ({ title, text }) => {
  return (
    <>
      <div>
        <p className='title'><b>{title}:</b></p> <p className='text'> {text}</p>
      </div>
      <hr />
    </>
  );
};

function Character() {

  const [id, setId] = useState(0);
  const [history, setHistory] = useState([]);
  const [character, setCharacter] = useState(null);
  const { loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
    onCompleted: (({ character }) => {
      setCharacter(character);
      const tmpHistory = history.concat([character]);
      setHistory(tmpHistory);
    }),
  });

  if (loading) return <Styled.Rotate>&lt; 👾 &gt;</Styled.Rotate>;
  if (error) return <p>Error</p>;

  const handleClick = () => {
    setId(Math.floor(Math.random() * 826))
  };

  return (
    <Styled.Container>
      {id === 0 ? (
        <Styled.Message>
          <h2>No se ha cargado ningún personaje</h2>
        </Styled.Message>
      ) : (
      <Styled.mainDiv>
        <Styled.ImageDiv>
          <img width="430px" heigth="430px" src={character.image} alt={character.name} className='image-character' />
        </Styled.ImageDiv>
        <Styled.CharacterDiv>
            <div>
              <h2><b>{character.name}</b></h2>
              <h6>CHARACTER ID: {character.id}</h6>
            </div>
            <div>
              <DivInfo title={"Status"} text={character.status} />
              <DivInfo title={"Species"} text={character.species} />
              <DivInfo title={"Type"} text={character.type} />
              <DivInfo title={"Gender"} text={character.gender} />
              <DivInfo title={"Origin"} text={character.origin.name} />
              <DivInfo title={"Location"} text={character.location.name} />
              <DivInfo title={"Created at"} text={character.created} />
            </div>
        </Styled.CharacterDiv>
      </Styled.mainDiv>
      )}
      <Styled.Button onClick={() => handleClick()} primary>
        Generate
      </Styled.Button>
      <div style={{margin : "3rem"}}>
        <h2 style={{ display: character ? 'block' : 'none', textAlign: 'center'}}>History</h2>
        {history.map((character) => {
          if (character !== null) {
            return (
              <Styled.Card>
                <img src={character.image} alt={character.name} className='image-character-history' />
                <div className='CharacterTitle'>
                  <h2>{character.name}</h2>
                </div>
                <div className='CharacterView'>
                  <Styled.Button onClick={(() => setCharacter(character))} isPink>View</Styled.Button>
                </div>
              </Styled.Card>
            )
          }
        })}
      </div>
    </Styled.Container>

  )
}

export default Character;
