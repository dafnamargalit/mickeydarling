import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #f59ee2;
  display:block;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#f59ee2;
  min-height:100vh;
  margin-top:0;
  font-family:Verdana;
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
 
export default MyApp;