import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
    --black: #0C0C0C;
    --gray: #29272A;
    --white: #FFFFFF;
    --yellow: #FDD33B;
    --grayLight: #808080
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: var(--yellow);
    font-family: 'Roboto',  -apple-system, 'Ubuntu', sans-serif;
    margin: 0;
  }

  .screen {
    flex-direction: row;
    column-gap: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div > img {
    width: 170px;
    margin-top: 10px;
  }

  .container-app{
    row-gap: 25px;
    padding: 56px 0;

    img {
      margin-bottom: 32px;
    }
  }

  @media (max-width: 800px) {
    .screen {
    flex-direction: column;
    row-gap: 18px  
  }
  .container-app{
    padding: 0;

    img {
      margin-bottom: 0;
    }
  }
  }



`;
