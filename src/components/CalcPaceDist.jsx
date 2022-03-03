import React, { useState } from 'react';
import CountainerStyle from './style';

export default function CalcPaceDist() {
  const [distance, setDistance] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');

  function handleIputDist(target) {
    setDistance(target.value);
  }

  function handleIputHour(target) {
    setHour(target.value);
  }

  function handleIputMin(target) {
    setMin(target.value);
  }

  return (
    <CountainerStyle>
      <h3>PACE MÉDIO DE ACORDO COM A DISTÂNCIA E O TEMPO</h3>
      <form action="">
        <label htmlFor="km">
          Distância (em Km)
          <input type="text" value={distance} onChange={({ target }) => handleIputDist(target)} name="distance" id="km" placeholder="Km" />
        </label>
        <div className="min-seg">
          Tempo
          <label htmlFor="for-km" className="for-km">
            <input type="number" value={hour} onChange={({ target }) => handleIputHour(target)} id="for-km" placeholder="Horas" />
            <input type="number" value={min} onChange={({ target }) => handleIputMin(target)} placeholder="Minutos" />
          </label>
        </div>
        <button type="button">Calcular</button>
      </form>
      <h3>
        Pace Médio:
        {' '}
      </h3>
    </CountainerStyle>
  );
}
