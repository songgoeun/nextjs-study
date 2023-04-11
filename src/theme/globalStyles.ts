import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  a { cursor: pointer; text-decoration: none; }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0 !important;
  }
`;
