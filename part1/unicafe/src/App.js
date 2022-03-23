import React from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
    'Adding manpower to a late software project makes it later!',
    'The best way to get a project done faster is to start sooner',
  ];

  let [seleccion, setSeleccion] = React.useState(0);

  //array contador de votos votesArr[ceros]
  const [counter, setCounter] = React.useState(Array(anecdotes.length).fill(0));

  let handleClick = () => {
    return setSeleccion(redondeado());
  };

  //número aleatorio
  const numeroAleatorioDecimales = (min, max) => {
    let num = Math.random() * (max - min);
    let conDecimal = num + min;
    return conDecimal;
  };

  let redondeado = () =>
    Math.round(numeroAleatorioDecimales(0, anecdotes.length - 1));

  const handleVote = () => {
    const voteBox = [...counter];
    voteBox[seleccion] += 1;
    return setCounter(voteBox);
  };

  const contadorVotos = Math.max(...counter);
  const masVotos = anecdotes[counter.indexOf(contadorVotos)];

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p style={{ margin: '1.5rem', paddingRight: '30rem' }}>
        {anecdotes[seleccion]}
      </p>
      <p style={{ margin: '1.5rem', paddingRight: '30rem' }}>
        has {counter[seleccion]} votes
      </p>
      <button onClick={handleVote} style={{ margin: '1.5rem' }}>
        vote
      </button>
      <button onClick={handleClick} style={{ margin: '1.5rem' }}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <p>{masVotos}</p>
    </>
  );
}
export default App;
