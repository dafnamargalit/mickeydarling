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
            <Section home="true" >
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
    font-size: 1.5rem;
    margin: ${props => props.home ? "1.3rem 0" : "0"};
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
        color: #430FFD;
        transition: all 0.5s ease;
    }
    z-index: 2;
`;

const Word = styled.div`
    display: flex;
    margin: 0 0.2rem;
`;