import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
    --black: #000000;
    --gray: #29272A;
    --white: #ffffff;
    --yellow: #FDD33B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--yellow);
  }
  
  body {
    margin: 0;
    font-family: inter, -apple-system, 'Roboto', 'Ubuntu', sans-serif;
  }
`;