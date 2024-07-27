import Image from 'next/image';
import styled from 'styled-components';
import {motion} from 'framer-motion';
export default function AlterEgo(props) {
    const { name, image } = props;

    return (
        <Container>
            <motion.div
                initial={{ scale: 0, opacity: 0}}
                animate={{ scale: 1, opacity: 1}}
                transition={{ duration: 1 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                    rotate: [0, 0, 270, 270, 0]
                  }}
                  >
            <Avatar src={image} 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            />
            </motion.div>
            <Title>
            {name}
            </Title>
        </Container>
    )
}

const Container = styled.div`
    height: 30vh;
    width: 30vh;
    margin: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        height: 25vh;
        width: 25vh;
        margin: 2em;
    }

`;      

const Avatar = styled(Image)`
    border-radius: 50%;
    border: 4px solid;
    border-color: #FFD04F;
`;

const Title = styled.p`
    margin: 0;
    font-size: 1.5em;
    font-weight: 600;
    color: #000;
`;