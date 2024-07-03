import styled, { keyframes } from 'styled-components';
import Head from 'next/head';
import M from 'assets/M.svg';
import I from 'assets/I.svg';
import C from 'assets/C.svg';
import K from 'assets/K.svg';
import E from 'assets/E.svg';
import Y from 'assets/Y.svg';
import D from 'assets/D.svg';
import A from 'assets/A.svg';
import R from 'assets/R.svg';
import L from 'assets/L.svg';
import I2 from 'assets/I2.svg';
import N from 'assets/N.svg';
import G from 'assets/G.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import { useState, useEffect } from 'react';

export default function index() {
  const [width, setWidth] = useState(0);
  function handleWindowResize() {
      setWidth(window.innerWidth);
  };

  useEffect(() => {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
  }, width);

  const isMobile = width <= 768;

  return (
    <Layout isMobile={isMobile}>
      <Container>
      <Head>
        <title>mickey darling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Announcement>
        <p>ST. LOUIS // NEW YEARS EVE WITH CHERUB</p>
      </Announcement>
      <DesktopLogo>
        <Row>
            <Letters src={M} width="11vh" alt="M" priority />
            <Letters src={I} anim="true" width="5vh" alt="I" priority />
            <Letters src={C} width="6vh" alt="C" priority />
            <Letters src={K} anim="true" alt="K" priority />
            <Letters src={E} width="7vh" alt="E" priority />
            <Letters src={Y} anim="true" width="8vh" alt="Y" priority />
        </Row>
        <Row>
            <Letters src={D} width="6vh" alt="D" priority />
            <Letters src={A} anim="true" alt="A" priority />
            <Letters src={R} alt="R" priority />
            <Letters src={L} anim="true" alt="L" priority />
            <Letters src={I2} width="6vh" alt="I" priority />
            <Letters src={N} anim="true" alt="N" priority />
            <Letters src={G} alt="G" priority />
        </Row>
      </DesktopLogo>
      <MobileLogo>
        <Row>
            <Letters src={M} width="5vh" alt="M" priority />
            <Letters src={I} anim="true" width="2vh" alt="I" priority/>
            <Letters src={C} width="3vh" alt="C" priority />
            <Letters src={K} anim="true" alt="K" width="5vh" priority/>
            <Letters src={E} width="4vh" alt="E" priority />
            <Letters src={Y} anim="true" width="5vh" alt="Y" priority />
        </Row>
        <Row>
            <Letters src={D} width="3vh" alt="D" priority />
            <Letters src={A} anim="true" width="5vh" alt="A" priority />
            <Letters src={R} alt="R" width="5vh" priority />
            <Letters src={L} anim="true" alt="L" width="5vh" priority />
            <Letters src={I2} width="3vh" alt="I" priority />
            <Letters src={N} anim="true" alt="N" width="5vh" priority />
            <Letters src={G} alt="G" width="5vh" priority />
        </Row>
      </MobileLogo>
    </Container>  
  </Layout>
);
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const pulse = keyframes`
0% {
transform: scale(1) skew(60deg) translateX(-10px) translateY(20px);
}
50% {
transform: scale(1.2) skew(0deg) translateX(10px) translateY(-10px);
}
100% {
transform: scale(1) skew(0deg)  translateX(0px) translateY(0px);
}
`

const pulse2 = keyframes`
0% {
transform: scale(1) skew(-60deg) translateY(-20px);
}
50% {
transform: scale(1.4) skew(0deg) translateY(10px);
}
100% {
transform: scale(1) skew(0deg) translateY(0px);
}
`

const Letters = styled(Image)`
will-change: transform;
width: ${p => p.width ? p.width : '10vh'};
padding: ${p => p.padding ? p.padding : '0.2em'};
height: auto;

animation:  ${p => p.anim ? pulse : pulse2} 0.5s alternate ease-out;

`;

const Announcement = styled.div`
  background-color: #FFD04F;
  position: absolute;
  top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #000 1px solid;
  width: 300px;
  font-size: 1rem;
  padding: 0.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    width: 200px;
    font-size: 0.75rem;
    top: 150px;
  }
  &:hover {
    transform: scale(1.01);
    transition: all 0.5s ease;
    cursor: pointer;
    background-color: #FFD324;
    }
`;

const Row = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const DesktopLogo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
  display: none;
}
`;

const MobileLogo = styled.div`
display: none;
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;