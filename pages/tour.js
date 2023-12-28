"use client";

import styled, { keyframes } from 'styled-components';
import { Bus, BusFill } from 'assets';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tourTitle from 'assets/tour.png';
import Script from 'next/script'

export default function Tour() {
  var [busPathLength, setBusPathLength] = useState(null);

  useEffect(() => {
    var path = document.querySelector('.Bus');
    if (path){
      setBusPathLength(path.getTotalLength());
    }
  });


  return (
      <Container>
        <TourBus pathLength={busPathLength} />
        <BusColor />
        <TourTitle src={tourTitle} alt="tour" />
        <Header/> 
        {/* TODO: check if list is loaded */}
          <TourWrap>
            <div id="seated-55fdf2c0" data-artist-id="e1796c0a-1afe-4112-bb74-6059df5e2e8b" data-css-version="3"/>
            <Script src="https://widget.seated.com/app.js" />
          </TourWrap>
      </Container>
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
    animation: dash 2s linear;   
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
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #000;
`;

const ListSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 33%;
`;

const Title = styled.p`
  margin: 0;
`;

const TicketButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid #000;
  background: #BB88FC;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #BB88FD;
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`;