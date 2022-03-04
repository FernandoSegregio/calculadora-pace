import React, { useState } from 'react';
import { CountainerStyle } from './style';

export default function CalcPaceDist() {
  const [calcTempMin, setCalcTempMin] = useState(0);
  const [calcTempSeg, setCalcTempSeg] = useState('00');
  const [distance, setDistance] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('');
  const [speed, setSpeed] = useState('00.00');

  function handleIputDist(target) {
    setDistance(target.value);
  }

  function handleIputHour(target) {
    setHour(target.value);
  }

  function handleIputMin(target) {
    setMin(target.value);
  }

  function calcDistance() {
    const hourInMin = Number(hour) * 60;
    const totalMin = Number(hourInMin) + Number(min);
    const paceMin = Number(totalMin) / Number(distance);
    const inteiroMin = Math.trunc(paceMin);
    const decimalMin = paceMin % 1;

    if (decimalMin > 0) {
      const inteiroSeg = decimalMin * 60;
      setCalcTempMin(inteiroMin);
      setCalcTempSeg(Math.trunc(inteiroSeg));
      setSpeed((60 / paceMin).toFixed(2));
    } else {
      setCalcTempMin(inteiroMin);
      setCalcTempSeg('00');
      setSpeed((60 / paceMin).toFixed(2));
    }
  }

  return (
    <CountainerStyle className="speed">
      <h3>PACE MÉDIO DE ACORDO COM A DISTÂNCIA E O TEMPO</h3>
      <form action="">
        <label htmlFor="km">
          Distância (em Km)
          <input type="number" value={distance} onChange={({ target }) => handleIputDist(target)} name="distance" id="km" placeholder="Km" />
        </label>
        <div className="min-seg">
          Tempo
          <label htmlFor="for-km" className="for-km">
            <input type="number" value={hour} onChange={({ target }) => handleIputHour(target)} id="for-km" placeholder="Horas" />
            <input type="number" value={min} onChange={({ target }) => handleIputMin(target)} placeholder="Minutos" />
          </label>
        </div>
        <button type="button" onClick={calcDistance}>Calcular</button>
      </form>
      <h3 className="speed-H3">
        Pace Médio:
        {' '}
        {calcTempMin}
        min
        {' '}
        {calcTempSeg}
        seg
        {' '}
      </h3>
      <h3 className="speed-H3">
        Velocidade Média:
        {' '}
        {speed}
        {' '}
        km/h
        {' '}
      </h3>
    </CountainerStyle>
  );
}
