import { TV } from 'assets';
import Layout from 'components/Layout';
import YoutubeEmbed from 'components/YoutubeEmbed';
import getAlterEgoById from 'data/ego';
import { IconLeftArrow } from 'icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SocialFooter from 'components/SocialFooter';
import Head from 'next/head';

export default function AlterEgo() {
    const router = useRouter();
    const {
      query: { id },
    } = router;
    var [pathLength, setPathLength] = useState(null);

    useEffect(() => {
      var path = document.querySelector('.TV');
      if (path){
        setPathLength(path.getTotalLength());
      }
    });

    const {
        data: ego
    } = getAlterEgoById(id)

    return (
        <Layout>
            <Head>
            <title>Mickey Darling – {ego?.name}</title>
            </Head>
            <Container>
                <TVDrawing pathLength={pathLength} />
            <Header>
            <Link href={`/alteregos`}>
                    <BackButton />
            </Link>
                <></>
            </Header>
            <Content>
                <VideoWrap
                    animate={{ opacity: [0,1] }}
                    transition={{ duration: 2 }}
                >
                <YoutubeEmbed embedId={ego?.embed} />
                </VideoWrap>
                <></>
              
                <AboutCard
                    animate={{ scale: [1,1.1,1] }}
                    transition={{ duration: 1.5 }}
                    >
                        <CardHeader/>
                        <CardContent>
                    <h1>{ego?.name}</h1>
                    <p>{ego?.about}</p>
                    {ego?.socials && <SocialFooter {...ego?.socials} />}
                    </CardContent>
                </AboutCard>
            </Content>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`;

const VideoWrap = styled(motion.div)`
    display: flex;
    width: 38%;
    height: 36%;
    box-shadow: 0 0 10px #ffdd00, 0 0 20px #ffdd00, 0 0 30px #ffdd00;
    @media (max-width: 600px){
        width: 90vw;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
`;


const AboutCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 25vw; 
    height: 25vw; 
    background-color: #ffeb3b; 
    border: 1px solid #ffdd00;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    margin-right: 15vw;

`;

const CardHeader = styled.div`
    background-color: #fae94b;
    border-bottom: 1px solid #f2e146;
    width: 100%;
    height: 12%;
`;
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
`;
const Header = styled.div`
    display: flex;
    padding: 10vh 2vw;
    justify-content: space-between;
`;
const BackButton = styled(IconLeftArrow)`
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
        stroke: "#e60073";
    }
    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
    }
`;


const TVDrawing = styled(TV)`
width: 100vw;
height: 100vh;
z-index: -1;
position: absolute;
left: 3vw;
transform: scale(1.2) translate(2vw, -9vh);
& path {
    fill: none;
    stroke: #000;
    stroke-width: 3px;
    stroke-dasharray: ${props => props.pathLength + ' ' + props.pathLength};
    stroke-dashoffset: ${props => -props.pathLength}; 
    stroke-linecap: round;
    stroke-miter-limit: 10;
    animation: tv 2s linear;   
    animation-fill-mode: forwards;
    keypoints: 1, 0;
    keytimes: 0, 1;
}

@keyframes tv {
    100% {
        stroke-dashoffset: ${props => -props.pathLength*2};
    }
}
`;