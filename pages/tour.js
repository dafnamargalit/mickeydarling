import styled, { keyframes } from 'styled-components';
import { Bus, BusFill } from 'assets';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import multipleStars from 'assets/multipleStars.png';
import Link from 'next/link';

export default function Tour() {
  var [busPathLength, setBusPathLength] = useState(null);

  const shows = [
    {
        title: 'Madeline The Person w/ Dafna at The Moroccan Lounge',
        date: 'Dec 7th 2023',
        location: 'Los Angeles, CA',
        link: 'https://www.ticketmaster.com/madeline-the-person-los-angeles-california-12-07-2023/event/09005F35F28047BC'
    },    
    {
      title: 'Madeline The Person w/ Dafna at The Moroccan Lounge',
      date: 'Dec 7th 2023',
      location: 'Los Angeles, CA',
      link: 'https://www.ticketmaster.com/madeline-the-person-los-angeles-california-12-07-2023/event/09005F35F28047BC'
  },     
  {
    title: 'Madeline The Person w/ Dafna at The Moroccan Lounge',
    date: 'Dec 7th 2023',
    location: 'Los Angeles, CA',
    link: 'https://www.ticketmaster.com/madeline-the-person-los-angeles-california-12-07-2023/event/09005F35F28047BC'
},    
{
  title: 'Madeline The Person w/ Dafna at The Moroccan Lounge',
  date: 'Dec 7th 2023',
  location: 'Los Angeles, CA',
  link: 'https://www.ticketmaster.com/madeline-the-person-los-angeles-california-12-07-2023/event/09005F35F28047BC'
},    
{
  title: 'Madeline The Person w/ Dafna at The Moroccan Lounge',
  date: 'Dec 7th 2023',
  location: 'Los Angeles, CA',
  link: 'https://www.ticketmaster.com/madeline-the-person-los-angeles-california-12-07-2023/event/09005F35F28047BC'
},    
{
title: 'Madeline The Person w/ Dafna at The Moroccan Lounge',
date: 'Dec 7th 2023',
location: 'Los Angeles, CA',
link: 'https://www.ticketmaster.com/madeline-the-person-los-angeles-california-12-07-2023/event/09005F35F28047BC'
},     
]

  useEffect(() => {
    var path = document.querySelector('.Bus');
    console.log(path);
    if (path){
      setBusPathLength(path.getTotalLength());
    }
  });

  return (
      <Container>
        <Image src={multipleStars} layout="fill" objectFit="cover" alt="stars" priority />
        <TourBus pathLength={busPathLength} />
        <BusColor />
        <Header>
        </Header>
        <TourList>
            {shows.map((show, index) => (
                <ListItem key={index}>
                    <ListSection>
                        <Title>{show.date}</Title>
                        <Title>{show.title}</Title>
                    </ListSection>
                    <p>{show.location}</p>
                    <TicketButton href={show.link}>
                        TICKETS
                    </TicketButton>
                </ListItem>
            ))}
        </TourList>
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
        height: 20vh;
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

const TourList = styled.div`
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