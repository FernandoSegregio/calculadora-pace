import styled from 'styled-components';

export const CountainerStyle = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 290px;
    background: var(--gray);
    border-radius: 15px;  
    margin-left: auto;
    margin-right: auto;
    color: var(--yellow);

    H3 {
      text-align: center;
      padding: 18px;
      color: var(--yellow);
      font-size: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;  
      width: 100%
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      column-gap: 4px;
      width: 90%;
    }

    .min-seg {
      width: 90%;
    }

    .for-km {
      flex-direction: row;
    }

    input {
      height: 40px;
      background-color: var(--grayLight);
      border: none;
      border-radius: 6px;
      font-size: 1.3rem;
      width: 90%;
      text-align: center;
    }

    input::placeholder {
      color: var(--gray);
      text-align: center;
      font-size: 16px;
    }

    button {
      margin-top: 10px;
      height: 40px;
      background-color: var(--black);
      border: none;
      border-radius: 6px;
      width: 82%;
      color: var(--yellow);
      font-size: 1rem;
    }
    div .speed {
      width: 400px;
    }

    .speed-H3 {
      padding: 3px
    }
  }
`;

export const FooterStyle = styled.footer`
  @media (max-width: 800px) {

    display: flex;
    flex-direction: row;
    font-size: 12px;
    width: 100%;
    padding: 20px;
    justify-content: center;
  
    h4 {
      font-family: sans-serif;
      font-weight: 300;
      letter-spacing: 0.3px;
    }
  }
`;
