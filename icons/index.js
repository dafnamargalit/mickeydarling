import styled from 'styled-components';
import React from 'react';

const Svg = styled.svg.attrs((props) => ({
    width: props.width || '24px',
    height: props.height || '24px',
    display: props.display || 'block',
    fill: props.fill || 'none',
    viewBox: props.viewBox || '0 0 24 24',
  }))``;

  
export const IconLeftArrow = (props) => (
    <Svg {...props} height="24" stroke="#bd00a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" x2="4" y1="12" y2="12"/>
      <polyline points="10 18 4 12 10 6"/>
    </Svg>
  );

  export const IconSpotify = (props) => (
    <Svg className="Icon"  height="100%" fill="#bd00a4" version="1.1" viewBox="0 0 150 150" width="100%" {...props}>
            <g>
                <rect fill="none" id="canvas_background"/>
            </g>
            <g>
                <rect id="svg_1" fillRule="evenodd" fill="none" clipRule="evenodd"/>
                <path id="svg_2" fillRule="evenodd" fill="#bd00a4" d="m64,0c-35.2,0 -64,28.8 -64,64s28.8,64 64,64s64,-28.8 64,-64s-28.48,-64 -64,-64m29.44,92.48c-1.28,1.92 -3.52,2.56 -5.44,1.28c-15.04,-9.28 -33.92,-11.2 -56.32,-6.08c-2.24,0.64 -4.16,-0.96 -4.8,-2.88c-0.64,-2.24 0.96,-4.16 2.88,-4.8c24.32,-5.44 45.44,-3.2 62.08,7.04c2.24,0.96 2.56,3.52 1.6,5.44m7.68,-17.6c-1.6,2.24 -4.48,3.2 -6.72,1.6c-17.28,-10.56 -43.52,-13.76 -63.68,-7.36c-2.56,0.64 -5.44,-0.64 -6.08,-3.2c-0.64,-2.56 0.64,-5.44 3.2,-6.08c23.36,-7.04 52.16,-3.52 72,8.64c1.92,0.96 2.88,4.16 1.28,6.4m0.64,-17.92c-20.48,-12.16 -54.72,-13.44 -74.24,-7.36c-3.2,0.96 -6.4,-0.96 -7.36,-3.84c-0.96,-3.2 0.96,-6.4 3.84,-7.36c22.72,-6.72 60.16,-5.44 83.84,8.64c2.88,1.6 3.84,5.44 2.24,8.32c-1.6,2.24 -5.44,3.2 -8.32,1.6" clipRule="evenodd"/>
            </g>
    </Svg>
  );

  export const IconInstagram = (props) => (
    <Svg fill="#bd00a4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 56.7 56.7" {...props}>
      <g>
        <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
          c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
        <circle cx="41.5" cy="16.4" r="2.9"/>
        <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
          h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
          s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
          c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
      </g>
  </Svg>
  );

  export const IconTwitter = (props) => (
    <Svg height="56.693px" fill="#bd00a4" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"/>
    </Svg>
  );

  export const IconYoutube = (props) => (
    <Svg height="100%" fill="#bd00a4" version="1.1" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z" />
    </Svg>
  );