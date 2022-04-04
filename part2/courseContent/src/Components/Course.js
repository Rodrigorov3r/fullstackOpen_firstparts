import React from 'react';

const Course = ({ name, parts }) => {
  //suma de ejercicios

  const mapeoEjercicios = parts.map((x) => x.exercises);
  console.log(mapeoEjercicios);

  let totalEjercicios = mapeoEjercicios.reduce((a, b) => a + b);
  console.log(totalEjercicios);

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
