import styled, { keyframes } from 'styled-components';


export default function Merch() {
  return (
      <Container id="merch">
       <p>Merch</p>
      </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: blue;
`;

