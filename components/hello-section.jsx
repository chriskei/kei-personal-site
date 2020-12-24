import React from 'react';

const HelloSection = (props) => {
  const { setCurrentSection } = props;

  return (
    <div
      id="hello"
      onMouseOver={() => setCurrentSection(0)}
      style={{
        background: 'black',
        height: 500,
        width: '100%',
        color: 'orange',
      }}
    >
      Hello section
    </div>
  );
};

export { HelloSection };
