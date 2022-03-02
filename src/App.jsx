import React from 'react';
import CalcPaceDist from './components/CalcPaceDist';
import CalcPaceTemp from './components/CalcPaceTemp';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <CalcPaceDist />
      <CalcPaceTemp />
    </div>
  );
}

export default App;
