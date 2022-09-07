import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
html{
      font-size: 62.5%;
}
body {
  font-family: 'Quicksand', sans-serif;
}
:root{
  --gray-light:#ECECEC;
  --gray:#C0BEC3;
  --gray-dark:#57565E;
  --black: #09080C;
  --aqua:#ADCCB6;
  --grown:#4B3430;
  --green:#7D8A5F;
  --content-height:28em;
  --header-height:4em;
}
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1024px;
`;
