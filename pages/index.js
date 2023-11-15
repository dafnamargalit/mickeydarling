import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import M from '../assets/M.svg';
import I from '../assets/I.svg';
import C from '../assets/C.svg';
import K from '../assets/K.svg';
import E from '../assets/E.svg';
import Y from '../assets/Y.svg';
import D from '../assets/D.svg';
import A from '../assets/A.svg';
import R from '../assets/R.svg';
import L from '../assets/L.svg';
import I2 from '../assets/I2.svg';
import N from '../assets/N.svg';
import G from '../assets/G.svg';
import Image from 'next/image';
export default function Home() {
  return (
      <Container>
        <Head>
          <title>mickey darling</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Row>
            <Letters src={M} width="11vh"/>
            <Letters src={I} width="5vh"/>
            <Letters src={C} width="6vh"/>
            <Letters src={K} />
            <Letters src={E} width="7vh"/>
            <Letters src={Y} width="8vh"/>
        </Row>
        <Row>
            <Letters src={D} width="6vh"/>
            <Letters src={A} />
            <Letters src={R} />
            <Letters src={L} />
            <Letters src={I2} width="6vh"/>
            <Letters src={N} />
            <Letters src={G} />
        </Row>
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

const pulse = keyframes`
  0% {
    transform: scale(1);
    bottom: -0.2em;
  }
  50% {
    transform: scale(1.2);
    bottom: 0.2em;
  }
  100% {
    transform: scale(1);
    bottom: 0;
  }
`

const Letters = styled(Image)`
	will-change: transform;
	z-index: 1000;
	width: ${props => props.width ? props.width : '10vh'};
	padding: ${props => props.padding ? props.padding : '0.2em'};
    height: auto;

    animation:  ${pulse} 0.5s alternate ease-out;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;