import styled, { keyframes } from 'styled-components';
import { Bus, BusFill } from 'assets';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import multipleStars from 'assets/multipleStars.png';

export default function Tour() {
  var [busPathLength, setBusPathLength] = useState(null);

  useEffect(() => {
    var path = document.querySelector('.Bus');
    console.log(path);
    if (path){
      setBusPathLength(path.getTotalLength());
    }
    console.log(busPathLength);
  });

  return (
      <Container>
            <Image src={multipleStars} layout="fill" objectFit="cover" alt="stars" priority />
        <TourBus pathLength={busPathLength} />
        <BusColor />
      </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`;

const BusColor = styled(BusFill)`
width: 100vw;
height: 100vh;
z-index: 0;
position: absolute;
`;

const TourBus = styled(Bus)`
width: 100vw;
height: 100vh;
z-index: 1;
position: absolute;
& path {
    fill: none;
    stroke: #000;
    stroke-width: 5px;
    stroke-dasharray: ${props => props.pathLength + ' ' + props.pathLength};
    stroke-dashoffset: ${props => -props.pathLength}; 
    stroke-linecap: round;
    stroke-miter-limit: 10;
    animation: dash 3s linear;   
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

