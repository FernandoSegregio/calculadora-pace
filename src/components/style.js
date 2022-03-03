import styled from 'styled-components';

const CountainerStyle = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 330px;
    background: var(--gray);
    border-radius: 15px;  
    margin-left: auto;
    margin-right: auto;
    color: var(--yellow);

    H3 {
      text-align: center;
      padding: 23px;
      color: var(--yellow);
      font-size: 1.12rem;
    }

    label {
      display: flex;
      flex-direction: column;
      column-gap: 4px;
    }

    .min-seg {
      align-items: flex-start;
    }

    .for-km {
      flex-direction: row;
    }

    input {
      height: 40px;
      background-color: var(--grayLight);
      border: none;
      border-radius: 6px;
      font-size: 0.855rem;
      padding-left: 20px
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
      width: 100%;
      color: var(--yellow);
      font-size: 1.3rem;
    }
  }
`;

export default CountainerStyle;
