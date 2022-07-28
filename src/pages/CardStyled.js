import styled, { keyframes, createGlobalStyle } from 'styled-components';

const Container = styled.div`
  margin: 2rem;
`

const rotate = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`;

const Rotate = styled.p`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export { Rotate };

const Message = styled.h2`
  text-align: center;
  margin-top: 6rem;
  font-size: 1.3rem;
`;

export { Message };

const Card = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  display:flex;
  align-items: center;
  margin: 25px auto;
  border: 1px solid #ccc;
  box-shadow: 7px 7px 15px gray;
  .CharacterTitle{
      text-align: left;
      margin-left: 1rem;
      width: 20%;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
.CharacterView{
    width: 80%;
    position: left;
    margin-left: 50%;
    align-items: center;
}
  h2{
    width: 100%;
    clear: both;
  }
  img{
      width: 80px;
  }
  text-align: center;
`
export { Card }

const Button = styled.button`
  background: ${props => props.primary ? "#4FB6C1" : "white"};
  color: ${props => props.primary ? "white" : "#4FB6C1"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4FB6C1;
  height: 3rem;
  width: 7rem;
  top: 45%;
  float: right;
`;

export { Button };

const mainDiv = styled.div`
  display: flex;

`;

const ImageDiv = styled.div`
  text-align: center;
  width: 50%;
  height: 100%;
`;

const CharacterDiv = styled.div`
  width: 50%;
  vertical-align: top;
  .title{
    margin: 0;
    padding: 0;
    text-align: left;
  }
  .text{
    margin: 0;
    padding: 0;

    text-align: right;
  }
`;

export { ImageDiv, CharacterDiv, mainDiv, Container };

const Info = styled.div`
  margin: 1rem;
`;

export { Info };

export default createGlobalStyle`
    * {
      font-size: 16px;
      font-family: Play,sans-serif;
      scroll-behavior: smooth;
      background-color: #;
    }
`
