import React from 'react';

const Course = ({ name, id, parts }) => {
  return (
    <>
      <header>
        <h2>{name}</h2>
      </header>
      {parts.map((e) => (
        <p key={e.id}>{e.name}</p>
      ))}
    </>
  );
};

export default Course;
