import React from 'react';
import Boton from '../src/Components/Boton';
import Statics from '../src/Components/Statics';

function App() {
  const handleClickGood = () => {
    setClicks(clicks.concat(1));
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setClicks(clicks.concat(0));
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setClicks(clicks.concat(-1));
    setBad(bad + 1);
  };
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);
  const [clicks, setClicks] = React.useState([]);

  return (
    <>
      <h1>give feedback</h1>
      <Boton onClick={handleClickGood} text="Good"></Boton>
      <Boton onClick={handleClickNeutral} text="Neutral"></Boton>
      <Boton onClick={handleClickBad} text="Bad"></Boton>
      <h1>statics</h1>
      <Statics good={good} neutral={neutral} bad={bad} clicks={clicks} />
      {/* <Formulario />; */}
    </>
  );
}
export default App;
