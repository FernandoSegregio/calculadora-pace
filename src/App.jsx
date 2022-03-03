import React from 'react';
import CalcPaceTemp from './components/CalcPaceTemp';
import GlobalStyle from './style/GlobalStyle';
import logo from './images/logo.png';

function App() {
  return (
    <div>
      <img src={logo} alt="Logo Pace Facil" />
      <GlobalStyle />
      <CalcPaceTemp />
    </div>
  );
}

export default App;
