import React from 'react';

const Course = ({ name, parts }) => {
  //suma de ejercicios
  const sumaEjercios = () => {
    let resul = 0;

    parts.map((e) => {
      resul += e.exercises;
    });
    return resul;
  };

  const totalEjercicios = sumaEjercios();

  return (
    <>
      <header>
        <h2>{name}</h2>
      </header>
      {parts.map((e) => (
        <p key={e.id}>
          {e.name}: {e.exercises}
        </p>
      ))}
      <p>
        <strong>Total of {totalEjercicios} exercises</strong>
      </p>
    </>
  );
};

export default Course;
