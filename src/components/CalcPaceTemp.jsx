import React, { useState } from 'react';
import CountainerStyle from './style';

export default function CalcPaceTemp() {
  const [calcTempHour, setCalcTempHour] = useState(0);
  const [calcTempMin, setCalcTempMin] = useState('00');
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

  function calcDistance() {
    const transformMinSeg = Number(min) * 60;
    const minSumSeg = Number(transformMinSeg) + Number(seg);
    const distanceCalc = minSumSeg * Number(distance);
    const convertTime = Number(distanceCalc / 3600);
    const intHour = Math.trunc(convertTime);
    const decimalHour = convertTime % 1;
    const intMin = Math.trunc(decimalHour * 60);
    if (intHour < 1) {
      setCalcTempHour(0);
      setCalcTempMin(intMin);
    } else if (convertTime >= 1) {
      setCalcTempHour(intHour);
      setCalcTempMin(intMin);
    }
    setDistance('');
    setMin('');
    setSeg('');
  }

  return (
    <CountainerStyle>
      <h3>TEMPO TOTAL DE ACORDO A DISTÂNCIA E O PACE</h3>
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
        <button type="button" onClick={calcDistance}>Calcular</button>
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
