import AlterEgo from 'components/AlterEgo';
import getAlterEgos from 'data/egos';
import Link from 'next/link';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';


export default function AlterEgos() {

  const egos = getAlterEgos();
  return (
      <Container>
       <p>Alter Egos</p>
      <WrapAlterEgos>
      {egos?.map((ego, i) => (
                  <Link key={i} href={`/alteregos/ego/${ego.id}`}>
                    <AlterEgoButton>
                      <p>{ego.name}</p>
                    </AlterEgoButton>
                  </Link>
                ))}
      </WrapAlterEgos>
      </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const WrapAlterEgos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

const AlterEgoButton = styled.div`
  height: 50vh;
  width: 50vh;
  background-color: green;
  margin: 1em;
`;

