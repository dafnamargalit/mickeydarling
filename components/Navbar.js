"use client";
import Link from 'next/link';
import styled, {keyframes} from 'styled-components';
import Image from 'next/image';
import logo from 'public/logo.png';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { HamburgerMenu } from 'assets';

export default function Navbar(props) {

    const router = useRouter();
    const [isHome, setIsHome] = useState(true);
    const [width, setWidth] = useState(0);
    const [show, setShow] = useState(false);

    function handleWindowResize() {
        setWidth(window.innerWidth);
    };
    
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
    }, width);

    const isMobile = width <= 768;
    
    useEffect(() => {
        if (router.pathname === "/") {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
    }   , [router.pathname]);



  return (
        <WrapNavBar>
            <SlideInNav show={show}>
                <NavItem href="/tour" onClick={() => setShow(!show)}>
                    TOUR
                </NavItem>
                <NavItem href="/about" onClick={() => setShow(!show)}>
                    ABOUT
                </NavItem>
                <NavItem href="/alteregos" onClick={() => setShow(!show)}>
                    ALTER EGOS  
                </NavItem>
                <NavItem href="https://sexiest-boy-band.myshopify.com/" onClick={() => setShow(!show)}>
                   MERCH
                </NavItem>
            </SlideInNav>
            {show && <ModalBackground onClick={() => setShow(!show)}/>}
            {isMobile ? 
            <Section home={isHome}>
                <MobileMenu fill={"#bd00a4"} onClick={() => setShow(!show)}/>
                {!isHome && <NavItem href="/">
                    <Logo src={logo} alt="logo" width={150} />
                </NavItem>}
                <MobileMenu />
            </Section>
            :
            <>
            <Section>
            {!isHome && <NavItem href="/">
                <Logo src={logo} alt="logo" width={150} />
            </NavItem>}
            </Section>
            <Section home="true" >
           <NavItem href="/tour" isCurrentPage={router.pathname === "/tour"} >
                TOUR
            </NavItem>
            <NavItem href="/about" isCurrentPage={router.pathname === "/about"} >
                ABOUT
            </NavItem>
            <NavItem href="/alteregos" isCurrentPage={router.pathname === "/alteregos"} >
                <Word>
                    ALTER
                </Word>
                <Word>
                    EGOS
                </Word>
            </NavItem>
            <NavItem href="https://sexiest-boy-band.myshopify.com/" isCurrentPage={router.pathname === "/merch"} >
                MERCH
            </NavItem>
            </Section>
            </>}
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
    width: 100vw;
`;

const Section = styled.div`
    display: flex;
    font-size: 1.5rem;
    padding: ${props => props.home ? "1.3rem" : " 0 1.3rem"};

    @media (max-width: 768px){
        align-items: center;
        justify-content: ${props => props.home ? "" : "space-between"};
        width: 100vw;
    }
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
    color: ${props => props.isCurrentPage ? "#bd00a4" : "#000"};
    text-decoration: none;
    &:hover {
        color: #bd00a4;
        transition: all 0.5s ease;
    }
    &:touch {
        color: #bd00a4;
        transition: all 0.5s ease;
    }
    z-index: 2;
    @media (max-width: 768px){
        font-size: 1.5rem;
    }
`;

const Word = styled.div`
    display: flex;
    margin: 0 0.2rem;
`;

const MobileMenu = styled(HamburgerMenu)`
    z-index: 3;
`;

const SlideInNav = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1000;
    top: 0;
    right: 0;
    height: 100vh;
    width: ${props => props.show ? "75vw" : "0"};
    background-color: rgb(245, 158, 226);
    animation: 0.5s slide-right ease-out;
    overflow-x: hidden;
    transition: 0.5s;
    transform: matrix(1, 0, 0, 1, 0, 0);
    @keyframes slide-right {
        0% {
          margin-left: -100%;
        }
        100% {
          margin-left: 0%;
        }
      }
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    z-index: 999;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.25);
    animation: 0.5s fade-in ease-out;
    @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
    }
`;