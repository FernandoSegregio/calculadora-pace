import React, { useState } from 'react';
import CountainerStyle from './style';

export default function CalcPaceTemp() {
  const [distance, setDistance] = useState('');
  const [min, setMin] = useState('');
  const [seg, setSeg] = useState('');

  function handleIputDist(target) {
    setDistance(target.value);
  }

  function handleIputMin(target) {
    setMin(target.value);
  }

  function handleIputSeg(target) {
    setSeg(target.value);
  }

  return (
    <CountainerStyle>
      <h3>CALCULA TEMPO TOTAL DE ACORDO COM O PACE</h3>
      <form action="">
        <label htmlFor="km">
          Distância (em Km)
          <input type="text" value={distance} onChange={({ target }) => handleIputDist(target)} name="distance" id="km" placeholder="Km" />
        </label>
        <div className="min-seg">
          Pace por Km
          <label htmlFor="for-km" className="for-km">
            <input type="number" value={min} onChange={({ target }) => handleIputMin(target)} id="for-km" placeholder="Minutos" />
            <input type="number" value={seg} onChange={({ target }) => handleIputSeg(target)} placeholder="Segundos" />
          </label>
        </div>
        <button type="button" onClick={}>Calcular</button>
      </form>
      <h3>
        Tempo total:
        {' '}
        {calcTempHour}
        h
        {' '}
        {calcTempMin}
        min
        {' '}
      </h3>
    </CountainerStyle>
  );
}
