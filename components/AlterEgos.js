import styled, { keyframes } from 'styled-components';


export default function AlterEgos() {
  return (
      <Container id="alter-egos">
       <p>Alter Egos</p>
      </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: teal;
`;

