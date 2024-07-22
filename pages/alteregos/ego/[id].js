import getAlterEgoById from 'data/ego';
import { IconLeftArrow } from 'icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function AlterEgo() {
    const router = useRouter();
    const {
      query: { id },
    } = router;


    const {
        data: ego
    } = getAlterEgoById(id)

    return (
        <Container>
                <Link href={`/alteregos`}>
                    <BackButton />
                </Link>
                {console.log(ego)}
            <p>{ego?.name}</p>
            <p>{ego?.about}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
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
