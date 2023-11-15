import { Link } from 'react-scroll';
import styled, {keyframes} from 'styled-components';

export default function Navbar(props) {

  return (
        <WrapNavBar>
            <NavItem activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                <span>H</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
            </NavItem>
           <NavItem activeClass="active" to="tour" spy={true} smooth={true} duration={500}>
                <span>T</span>
                <span>O</span>
                <span>U</span>
                <span>R</span>
            </NavItem>
            <NavItem activeClass="active" to="merch" spy={true} smooth={true} duration={500}>
                <span>M</span>
                <span>E</span>
                <span>R</span>
                <span>C</span>
                <span>H</span>
            </NavItem>
            <NavItem activeClass="active" to="alter-egos" spy={true} smooth={true} duration={500}>
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
            <NavItem activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
            </NavItem>
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
    right: 0;
    display: flex;
	align-items: center;
	justify-content: center;
    font-size: 1.5rem;
    span {
        color: #430FFD;
    }
    span:nth-child(2) {
        color: #FF5A26;
    }
    span:nth-child(3) {
        color: #FFD324;
    }
    span:nth-child(4) {
        color: #07bc0b;
    }
    span:nth-child(5) {
        color: #8237dc;
    }
`;

const NavItem = styled(Link)`
    margin: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        animation: ${pulse} 1s infinite;
    }
`;

const Word = styled.div`
    display: flex;
    margin: 0 0.2rem;
`;