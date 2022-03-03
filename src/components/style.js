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
      font-size: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;  
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      column-gap: 4px;
    }

    .min-seg {
      align-items: flex-start;
      width: 86%;
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
      padding-left: 20px;
      width: 150%;
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
      width: 86%;
      color: var(--yellow);
      font-size: 1rem;
    }
  }
`;

export default CountainerStyle;
