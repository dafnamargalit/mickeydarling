import styled, { keyframes } from 'styled-components';


export default function About() {
  return (
      <Container id="about">
       <p>About</p>
      </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: yellow;
`;

