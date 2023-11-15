import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Navbar from 'components/Navbar';
import Home from 'components/Home';
import Tour from 'components/Tour';
import Merch from 'components/Merch';
import About from 'components/About';
import AlterEgos from 'components/AlterEgos';

export default function index() {
  return (
    <>
      <Navbar />
      <Home />
      <Tour />
      <Merch />
      <AlterEgos />
      <About />
    </>
  );
}
