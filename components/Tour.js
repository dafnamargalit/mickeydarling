import styled, { keyframes } from 'styled-components';


export default function Tour() {
  return (
      <Container id="tour">
       <p>Tour</p>
      </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: green;
`;

