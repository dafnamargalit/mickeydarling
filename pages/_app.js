import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "components/Navbar";
import localFont from 'next/font/local'
import multipleStars from 'assets/multipleStars.png';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion'
import StarBackground from "components/StarBackground";
import Head from "next/head";

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
      </ThemeProvider>
    </>
  );
}
 
export default MyApp;