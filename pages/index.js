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
import star from 'assets/star.png';
import Image from 'next/image';
import StarBackground from 'components/StarBackground';

export default function index() {


  return (
    <Container>
    <Head>
      <title>mickey darling</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <StarBackground />
    <DesktopLogo>
      <Row>
          <Letters src={M} width="11vh" alt="M" />
          <Letters src={I} anim width="5vh" alt="I"/>
          <Letters src={C} width="6vh" alt="C"/>
          <Letters src={K} anim alt="K" />
          <Letters src={E} width="7vh" alt="E"/>
          <Letters src={Y} anim width="8vh" alt="Y"/>
      </Row>
      <Row>
          <Letters src={D} width="6vh" alt="D"/>
          <Letters src={A} anim alt="A" />
          <Letters src={R} alt="R" />
          <Letters src={L} anim alt="L" />
          <Letters src={I2} width="6vh" alt="I"/>
          <Letters src={N} anim alt="N" />
          <Letters src={G} alt="G" />
      </Row>
    </DesktopLogo>
    <MobileLogo>
      <Row>
          <Letters src={M} width="5vh" alt="M" />
          <Letters src={I} anim width="2vh" alt="I"/>
          <Letters src={C} width="3vh" alt="C"/>
          <Letters src={K} anim alt="K" width="5vh" />
          <Letters src={E} width="4vh" alt="E"/>
          <Letters src={Y} anim width="5vh" alt="Y"/>
      </Row>
      <Row>
          <Letters src={D} width="3vh" alt="D"/>
          <Letters src={A} anim width="5vh" alt="A" />
          <Letters src={R} alt="R" width="5vh" />
          <Letters src={L} anim alt="L" width="5vh" />
          <Letters src={I2} width="3vh" alt="I"/>
          <Letters src={N} anim alt="N" width="5vh" />
          <Letters src={G} alt="G" width="5vh" />
      </Row>
    </MobileLogo>
  </Container>
);
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
width: 100vw;
overflow: none;
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

const LittleStar = styled(Image)`
  width: 5em;
  height: auto;
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