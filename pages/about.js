import styled from 'styled-components';
import { AboutTitle, Heart } from 'assets';
import Image from 'next/image';
import aboutPhoto from 'assets/aboutmickey.jpeg';
import tape from 'assets/tape.webp';
import Layout from 'components/Layout';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
export default function About() {

  var [pathLength, setPathLength] = useState(null);

  useEffect(() => {
    var path = document.querySelector('.Heart');
    if (path){
      setPathLength(path.getTotalLength());
    }
  });
  return (
    <Layout>
      <Head>
        <title>Mickey Darling – About</title>
      </Head>
      <Container id="about">
        <HeartDrawing pathLength={pathLength}/>
        <AboutTitleStyled />
        <Content>
        <WrapPhoto
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <Tape src={tape} width="150" height="auto" alt="tape" />
          <AboutPhoto src={aboutPhoto} width="500" height="auto" alt="mickey" />
          <Tape2 src={tape} width="150" height="auto" alt="tape" />
        </WrapPhoto>
        <AboutDescription>
          <p>Mickey Darling is a San Antonio, TX based indie-pop duo consisting of Skyler Molina and Austin Medrano. A prolific content creator, Skyler takes lead vocals and provides creative direction for the band while Austin performs on all instruments, records and occasionally provides creative assistance. Together the creative duo draw strong comparisons to bedroom pop acts such as Boy Pablo, Gus Dapperton and Rex Orange County.

What started off as a joke early fall 2018, Skyler Molina challenged Austin Medrano to create a bedroom pop song. Less than two hours later, Austin had sent back the instrumental of what was to become the duo's 3rd single "Shane Dawson." Skyler, blown away by the instrumental, then proceeded to ask Austin if he would want to create a band with him. & thus, mickey darling was born.</p>
        </AboutDescription>
        </Content>
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
    overflow: hidden;
    position: relative;
    @media (max-width: 768px) {
      height: 100%;
      width: 100vw;
      margin-top: 10vh;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    @media (max-width: 768px) {
      flex-direction: column; 
    }
`;

const AboutTitleStyled = styled(AboutTitle)`
    width: 350px;
    height: 150px;
    position: absolute;
    top: 1vh;
    background: rgba(245, 158, 226);
    z-index: 3;

    @media (max-width: 768px) {
        width: 200px;
        top:20vh;
        background: none;
    }
`;

const WrapPhoto = styled(motion.div)`
display: flex;
position: relative;
@media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
}
`;

const AboutPhoto = styled(Image)`
    width: 500px;
    height: auto;
    @media (max-width: 768px) {
        width: 90%;
        border-radius: 50%;
    }
`;


const AboutDescription = styled.div`
    display: flex;
    width: 45vw;
    margin-left: 5vw;
    text-align: center;
    font-size: 1.15rem;

    @media (max-width: 768px) {
      width: 90%;
      margin: 5vh 0;
      font-size: 1rem;
    }
`;

const Tape = styled(Image)`
    transform: rotate(-45deg);
    position: absolute;
    z-index: 4;
    top: 0;
    left: -3vw;

    @media (max-width: 768px) {
      display: none;
  }
`;

const Tape2 = styled(Image)`
    transform: rotate(-45deg);
    position: absolute;
    z-index: 4;
    bottom: 0;
    right: -3vw;

    @media (max-width: 768px) {
      display: none;
  }
`;

const HeartDrawing = styled(Heart)`
width: 100vw;
height: 100vh;
z-index: -1;
position: absolute;
left: 3vw;
transform: scaleX(1.1) translateY(40vh);

& path {
    fill: none;
    stroke: #000;
    stroke-width: 3px;
    stroke-dasharray: ${props => props.pathLength + ' ' + props.pathLength};
    stroke-dashoffset: ${props => -props.pathLength}; 
    stroke-linecap: round;
    stroke-miter-limit: 10;
    animation: dasha 2s linear;   
    animation-fill-mode: forwards;
    keypoints: 1, 0;
    keytimes: 0, 1;
}

@keyframes dasha {
    100% {
        stroke-dashoffset: ${props => -props.pathLength*2};
    }

  @media (max-width: 768px) {
    h
    margin-top: 0vh;
  }
}
`;
