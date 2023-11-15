import { createGlobalStyle, ThemeProvider } from "styled-components";

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './pencil.ttf' })
 
const GlobalStyle = createGlobalStyle`
html{
  box-sizing: content-box;
  background: #f59ee2;
  height: 100%;
  padding: 0;
}

body{
  background-color:#f59ee2;
  min-height:100vh;
  margin:0;
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
        <main className={myFont.className}>
        <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
 
export default MyApp;