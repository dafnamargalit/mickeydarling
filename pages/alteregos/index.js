"use client";

import styled, { keyframes } from 'styled-components';
import { Guitar } from 'assets';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from 'components/Layout';
import AlterEgo from 'components/AlterEgo';
import getAlterEgos from 'data/egos';
import A from 'assets/alteregos/A.svg';
import L from 'assets/alteregos/L.svg';
import T from 'assets/alteregos/T.svg';
import E from 'assets/alteregos/E.svg';
import R from 'assets/alteregos/R.svg';
import Ep from 'assets/alteregos/Ep.svg';
import G from 'assets/alteregos/G.svg';
import O from 'assets/alteregos/O.svg';
import S from 'assets/alteregos/S.svg';
import Head from 'next/head';


export default function AlterEgos() {
  var [pathLength, setPathLength] = useState(null);

  useEffect(() => {
    var path = document.querySelector('.Guitar');
    if (path){
      setPathLength(path.getTotalLength());
    }
  });

  const egos = getAlterEgos();

  return (
    <Layout>
       <Head>
          <title>Mickey Darling – Alter Egos</title>
        </Head>
      <Container>
        <GuitarDrawing pathLength={pathLength} />
        <DesktopLogo>
        <Row>
            <Letters src={A} width="11vh" alt="A" priority />
            <Letters src={L} anim="true" width="5vh" alt="L" priority />
            <Letters src={T} width="6vh" alt="T" priority />
            <Letters src={E} anim="true" alt="E" priority />
            <Letters src={R} width="7vh" alt="R" priority />
        </Row>
        <Row>
            <Letters src={Ep} width="6vh" alt="E" priority />
            <Letters src={G} anim="true" alt="G" priority />
            <Letters src={O} alt="O" priority />
            <Letters src={S} anim="true" alt="S" width="6vh" priority />
        </Row>
      </DesktopLogo>
      <MobileLogo>
        <Row>
            <Letters src={A} width="5vh" alt="A" priority />
            <Letters src={L} anim="true" width="3vh" alt="L" priority />
            <Letters src={T} width="4vh" alt="T" priority />
            <Letters src={E} anim="true "width="4vh" alt="E" priority />
            <Letters src={R} width="5vh" alt="R" priority />
        </Row>
        <Row>
            <Letters src={Ep} width="4vh" alt="E" priority />
            <Letters src={G} anim="true" width="4vh"  alt="G" priority />
            <Letters src={O} alt="O" width="4vh" priority />
            <Letters src={S} anim="true" width="4vh"  alt="S" priority />
        </Row>
      </MobileLogo>
        <Header/> 
      <WrapAlterEgos>
      {egos?.map((ego, i) => (
                  <Link key={i} href={`/alteregos/ego/${ego.id}`}>
                      <AlterEgo {...ego} />
                  </Link>
                ))}
      </WrapAlterEgos>
      </Container>
  </Layout>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
    @media (max-width: 768px) {
      height: 100%;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

    @media (max-width: 768px) {
        height: 0vh;
    }
`;


const GuitarDrawing = styled(Guitar)`
width: 100vw;
height: 100vh;
z-index: -1;
position: absolute;
left: 3vw;
transform: scaleX(1.1);
margin-top:20vh;
& path {
    fill: none;
    stroke: #000;
    stroke-width: 3px;
    stroke-dasharray: ${props => props.pathLength + ' ' + props.pathLength};
    stroke-dashoffset: ${props => -props.pathLength}; 
    stroke-linecap: round;
    stroke-miter-limit: 10;
    animation: dashing 1.5s linear;   
    animation-fill-mode: forwards;
    keypoints: 1, 0;
    keytimes: 0, 1;
}

@keyframes dashing {
    100% {
        stroke-dashoffset: ${props => -props.pathLength*2};
    }
}
`;


const WrapAlterEgos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 5vh;
    margin-bottom: 10vh;
  }
`;


const Row = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 1em;
@media (max-width: 768px) {
  margin: 0;
}
`;

const DesktopLogo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 6vh;
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
  margin-top: 10vh;
}
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
