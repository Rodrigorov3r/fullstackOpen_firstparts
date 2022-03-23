import React from 'react';
import StaticLine from './StaticLine';

export const Statics = ({ good, neutral, bad, clicks }) => {
  //suma los clicks
  const sumasClicks = good + neutral + bad;
  //funcion base para usar reduce()
  const sumItem = (totalArr, item) => {
    const valor = totalArr + item;
    return valor;
  };
  //con reduce() sumo los items del array
  const sumArray = clicks.reduce(sumItem, 0);

  const promedio = () => sumArray / clicks.length;
  const positves = () => {
    const x = (good * 100) / sumasClicks;
    return x.toFixed(2) + ' %';
  };
  return (
    <>
      {clicks.length == 0 ? (
        <p>
          <b>No feedback given</b>
        </p>
      ) : (
        <table>
          <td>
            <tr>
              <StaticLine text="Good" value={good} />
              <StaticLine text="Neutral" value={neutral} />
              <StaticLine text="Bad" value={bad} />
              <StaticLine text="Total" value={sumasClicks} />
              <StaticLine text="Promedio" value={promedio()} />
              <StaticLine text="Positive" value={positves()}>
                %
              </StaticLine>
            </tr>
          </td>
        </table>
      )}
    </>
  );
};
