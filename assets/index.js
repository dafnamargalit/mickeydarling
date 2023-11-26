import styled from 'styled-components';
import React from 'react';

const Svg = styled.svg.attrs((props) => ({
  width: props.width || '24px',
  height: props.height || '24px',
  display: props.display || 'block',
  fill: props.fill || 'none',
  viewBox: props.viewBox || '0 0 24 24',
}))``;
