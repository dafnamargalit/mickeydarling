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