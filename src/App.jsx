import React from 'react';
import CalcPaceTemp from './components/CalcPaceTemp';
import GlobalStyle from './style/GlobalStyle';
import logo from './images/logo.png';
import CalcPaceDist from './components/CalcPaceDist';

function App() {
  return (
    <div className="container-app">
      <img src={logo} alt="Logo Pace Facil" />
      <GlobalStyle />
      <CalcPaceTemp />
      <CalcPaceDist />
    </div>
  );
}

export default App;
