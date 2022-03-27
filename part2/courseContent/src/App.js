import Course from './Components/Course';
import React from 'react';
import { ReactDOM } from 'react';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 8,
        id: 4,
      },
    ],
  };

  return (
    <Course
      name={course.name}
      parts={course.parts} //array de objetos
    />
  );
};

export default App;
