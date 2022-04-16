import React from 'react';

const Header = ({ course }) => <h1>{course.name}</h1>;

const Parts = ({ course }) =>
  course.parts.map((part) => (
    <p key={part.key}>
      {part.name} {part.exercises}
    </p>
  ));

const Totales = ({ course }) => {
  const arr = [];
  course.parts.map((part) => arr.push(part.exercises));
  const total = arr.reduce((a, b) => a + b);
  return (
    <p>
      <strong>Total of exercises is {total}</strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Parts course={course} />
      <Totales course={course} />
    </>
  );
};

export default Course;
