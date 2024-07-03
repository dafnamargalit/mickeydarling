import React, {useEffect, useState} from "react";
import styled from "styled-components";
import star from "assets/star.png";
import Image from "next/image";

export default function StarBackground(){

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [littleStarPositions, setlittleStarPositions] = useState([]);
    const [bigStarPositions, setBigStarPositions] = useState([]);


    useEffect(() => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        if(windowWidth > 768) {
            const positions = generateRandomPositions(24, windowWidth, windowHeight, 90);
            console.log(positions);
            setlittleStarPositions(positions.slice(0, 12));
            setBigStarPositions(positions.slice(13, 24));
        }
        
    }, [windowWidth, windowHeight]);

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
`;

const LittleStar = styled(Image)`
    width: 4em;
    height: auto;
`;

const BigStar = styled(Image)`
    width: 100px;
    height: auto;
`;