import React from 'react';
import styled from 'styled-components';
import instagramIcon from 'assets/instagram.svg';
import spotifyIcon from 'assets/spotify.svg';
import twitterIcon from 'assets/twitter.svg';
import youtubeIcon from 'assets/youtube.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialFooter(props){
    const {spotify, instagram, twitter, youtube} = props;

    return(
        <FooterWrap>
            {spotify && <Link href={spotify} style={{textDecoration:'none'}}>
            <FooterIcon src={spotifyIcon} alt="spotify"/>
            </Link>}
            {instagram && <Link href={`https://instagram.com/${instagram}`} style={{textDecoration:'none'}}>
            <FooterIcon src={instagramIcon} alt="insta"></FooterIcon>
            </Link>}
            {twitter && <Link href={`https://twitter.com/${twitter}`} style={{textDecoration:'none'}}>
            <FooterIcon src={twitterIcon} alt="twit"></FooterIcon>
            </Link>}
            {youtube && <Link href={youtube} style={{textDecoration:'none'}}>
            <FooterIcon src={youtubeIcon} alt="yt"></FooterIcon>
            </Link>}
        </FooterWrap>
    )
}

const FooterWrap = styled.div`
    display: flex;
`

const FooterIcon = styled(Image)`
    width: 3.5vh;
    height: auto;
    margin: .25vh;
    padding: 0.2em;
    transition: transform .2s;
    left: 0vh;
    &:hover{
        -webkit-filter: brightness(70%); 
    }
`