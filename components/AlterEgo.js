import { IconLeftArrow } from 'icons';
import styled from 'styled-components';

export default function AlterEgo(props) {
    const { data } = props;

    return (
        <Container {...props}>
            <BackButtonWrap onClick={props.onClose}>
                <BackButton />
            </BackButtonWrap>
            <p>{data?.name}</p>
        </Container>
    )
}

const Container = styled.div`
    background-color: "rgba(46, 46, 46, 0.301)";
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 10009;
    justify-content: center;
    align-items: center;
    display: ${props => props.show ? 'flex' : 'none'};
`;

const BackButtonWrap = styled.div`
  width: 50px;
  position: absolute;
  top: 30px;
  left: 0;
  margin: 1em;
  z-index: 10002;
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
