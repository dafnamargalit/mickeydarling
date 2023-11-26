import React, {useEffect, useState} from "react";
import styled from "styled-components";
import star from "assets/star.png";
import Image from "next/image";


function generateRandomPositions(numImages, containerWidth, containerHeight, imageWidth) {
    const positions = [];

    for (let i = 0; i < numImages; i++) {
        let position;
        let isValidPosition = false;

        while (!isValidPosition) {
            const x = Math.random() * containerWidth - imageWidth;
            const y = Math.random() * containerHeight - imageWidth;
            position = { x, y };

            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            const distanceFromCenter = Math.sqrt(
                Math.pow(centerX - position.x, 2) +
                Math.pow(centerY - position.y, 2)
            );

            isValidPosition = positions.every(existingPosition => {
                const distance = Math.sqrt(
                    Math.pow(existingPosition.x - position.x, 2) +
                    Math.pow(existingPosition.y - position.y, 2)
                );

                return distance >= imageWidth;
            }) && distanceFromCenter >= 300 && position.x > imageWidth && position.x < containerWidth - imageWidth && position.y > imageWidth && position.y < containerHeight - imageWidth;
        }

        positions.push(position);
    }

    return positions;
}

export default function StarBackground(){
    const numStars = 20;

    const [littleStarPositions, setlittleStarPositions] = useState([]);
    const [bigStarPositions, setBigStarPositions] = useState([]);

    function handleWindowResize() {
        const positions = generateRandomPositions(numStars, window.innerWidth, window.innerHeight, 60);
        setlittleStarPositions(positions);
        const bigStarPositions = generateRandomPositions(numStars, window.innerWidth, window.innerHeight, 80);
        setBigStarPositions(bigStarPositions);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    
    useEffect(() => {
        const positions = generateRandomPositions(numStars, window.innerWidth, window.innerHeight, 60);
        setlittleStarPositions(positions);
        const bigStarPositions = generateRandomPositions(numStars, window.innerWidth, window.innerHeight, 80);
        setBigStarPositions(bigStarPositions);
    }
    , []);

    console.log(littleStarPositions, bigStarPositions)

    return (
        <Container>
        {littleStarPositions.map((position, i) => (
            <LittleStar 
            key={i}
            src={star}
            alt={i}
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
            }}
            />
        ))}
        {bigStarPositions.map((position, i) => (
            <BigStar 
            key={i}
            src={star}
            alt={i}
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
            }}
            />
        ))}
        </Container>
    );
}

const Container = styled.div`
function handleWindowResize() {
    const positions = generateRandomPositions(numStars, window.innerWidth, window.innerHeight, 60);
    setlittleStarPositions(positions);
    const bigStarPositions = generateRandomPositions(numStars, window.innerWidth, window.innerHeight, 80);
    setBigStarPositions(bigStarPositions);
}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: none;
`;

const LittleStar = styled(Image)`
    position: absolute;
    width: 60px;
    height: auto;
`;

const BigStar = styled(Image)`
    position: absolute;
    width: 80px;
    height: auto;
`;