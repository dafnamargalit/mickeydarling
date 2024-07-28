import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import localFont from 'next/font/local'
import multipleStars from 'assets/multipleStars.png';
import { AnimatePresence } from 'framer-motion';
import Head from "next/head";
import SocialFooter from "components/SocialFooter";
import styled from "styled-components";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './dadhand.ttf' })
 
const GlobalStyle = createGlobalStyle`
html{
  box-sizing: content-box;
  background: #f59ee2;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body{
  background-color:#f59ee2;
  min-height:100vh;
  margin:0;
  background: url('/stars2.png') repeat;
  background-size: 1400px; 
  background-position: 0 0;
  overflow-x: hidden;
  position: relative;
}

a {
  text-decoration: none;
}
`;
 
const theme = {
  colors: {
    primary: "#f59ee2",
  },
};

const socials = {
    instagram: "mickeydarling42069",
    spotify: "https://open.spotify.com/artist/3uwUtL5kPSO2mpOhU4SiWz?si=nOf5RC80QbqfCghgv5s1sA",
    youtube: "https://www.youtube.com/channel/UCIY611OhBW293UfYHLX1jQw",
    twitter: "https://x.com/thiccydarling"
}
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Mickey Darling</title>
          <meta name="description" content="Mickey Darling" />
          <link rel="icon" href="/mini-logo.png" />
        </Head>
        <main className={myFont.className}>
        <Navbar />
        {/* <Image src={multipleStars} layout="fill" objectFit="cover" alt="stars" priority /> */}
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
        </main>
        <Footer>
        <SocialFooter {...socials} />
        </Footer>
      </ThemeProvider>
    </>
  );
}

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;

  z-index: 1;
  @media (max-width: 768px) {
    height: 8vh;
    background-color: rgba(245, 158, 226, 0.50);
  };
`;
 
export default MyApp;