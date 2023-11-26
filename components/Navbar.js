import Link from 'next/link';
import styled, {keyframes} from 'styled-components';
import Image from 'next/image';
import logo from 'public/logo.png';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Navbar(props) {

    const router = useRouter();
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        if (router.pathname === "/") {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }   , [router.pathname]);

  return (
        <WrapNavBar>
            <Section>
            {!isHome && <NavItem href="/">
                <Logo src={logo} alt="logo" width={150} />
            </NavItem>}
            </Section>
            <Section isHome >
           <NavItem href="/tour">
                TOUR
            </NavItem>
            <NavItem href="/merch">
                <span>M</span>
                <span>E</span>
                <span>R</span>
                <span>C</span>
                <span>H</span>
            </NavItem>
            <NavItem href="/alter-egos">
                <Word>
                <span>A</span>
                <span>L</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
                </Word>
                <Word>
                <span>E</span>
                <span>G</span>
                <span>O</span>
                <span>S</span>
                </Word>
            </NavItem>
            <NavItem href="/about">
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
            </NavItem>
            </Section>
        </WrapNavBar>
  )
}


const pulse = keyframes`
  0% {
    transform: scale(1);
    bottom: -0.2em;
  }
  50% {
    transform: scale(1.2);
    bottom: 0.2em;
  }
  100% {
    transform: scale(1);
    bottom: 0;
  }
`;

const WrapNavBar = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    width: 100%;
`;

const Section = styled.div`
    display: flex;
    font-size: 2rem;
    margin: ${props => props.isHome ? "1.3rem 0" : "0"};
`;

const Logo = styled(Image)`
  width: 150px;
  margin: 0.5rem;
  height: auto;
`;

const NavItem = styled(Link)`
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #000;
    &:hover {
        animation: ${pulse} 1s infinite;
    }
    z-index: 2;
    // span {
    //     color: #430FFD;
    // }
    // span:nth-child(2) {
    //     color: #FF5A26;
    // }
    // span:nth-child(3) {
    //     color: #FFD324;
    // }
    // span:nth-child(4) {
    //     color: #07bc0b;
    // }
    // span:nth-child(5) {
    //     color: #8237dc;
    // }
`;

const Word = styled.div`
    display: flex;
    margin: 0 0.2rem;
`;