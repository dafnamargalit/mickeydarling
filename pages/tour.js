"use client";

import styled, { keyframes } from 'styled-components';
import { Bus, BusFill } from 'assets';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tourTitle from 'assets/tour.png';
import { TourList } from 'components/TourList';
import Layout from 'components/Layout';
import Head from 'next/head';

export default function Tour() {
  var [busPathLength, setBusPathLength] = useState(null);

  useEffect(() => {
    var path = document.querySelector('.Bus');
    if (path){
      setBusPathLength(path.getTotalLength());
    }
  });


  return (
    <Layout>
      <Head>
        <title>Mickey Darling – Tour</title>
      </Head>
      <Container>
        <TourBus pathLength={busPathLength} />
        <BusColor />
        <TourTitle src={tourTitle} alt="tour" />
        <Header/> 
          <TourWrap>
            <TourList />
          </TourWrap>
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
    top: 0;
    overflow: hidden;
    width: 100vw;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

    @media (max-width: 768px) {
        height: 33vh;
    }
`;

const TourTitle = styled(Image)`
    width: 300px;
    height: auto;
    position: absolute;
    top: 3vh;
    background: rgba(245, 158, 226);
    z-index: 3;

    @media (max-width: 768px) {
        width: 200px;
        top:13vh;
    }
`;

const BusColor = styled(BusFill)`
width: 100vw;
height: 100vh;
z-index: 0;
position: absolute;
left: -2.5vw;
transform: scaleX(1.1);

animation: fadein 2s;

@keyframes fadein {
    0% { opacity: 0; }
    100%   { opacity: 1; }
}
`;

const TourBus = styled(Bus)`
width: 100vw;
height: 100vh;
z-index: 1;
position: absolute;
left: -2.5vw;
transform: scaleX(1.1);
& path {
    fill: none;
    stroke: #000;
    stroke-width: 5px;
    stroke-dasharray: ${props => props.pathLength + ' ' + props.pathLength};
    stroke-dashoffset: ${props => -props.pathLength}; 
    stroke-linecap: round;
    stroke-miter-limit: 10;
    animation: dash 2.5s linear;   
    animation-fill-mode: forwards;
    keypoints: 1, 0;
    keytimes: 0, 1;
}

@keyframes dash {
    100% {
        stroke-dashoffset: ${props => -props.pathLength*2};
    }
}
`;

const TourWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  height: 62vh;
  background: rgba(245, 158, 226, 0.90);
  z-index: 2;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    background: rgba(245, 158, 226, 0.70);
    margin-bottom: 10vh;
  }

  animation: fadein 2s;

@keyframes fadein {
    0% { opacity: 0; }
    100%   { opacity: 1; }
}

`;
