import React from 'react';

const StaticLine = ({ text, value }) => {
  return (
    <>
      <p>
        {text}: {value}
      </p>
    </>
  );
};

export default StaticLine;