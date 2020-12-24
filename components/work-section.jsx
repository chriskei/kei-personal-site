import React from 'react';

const WorkSection = (props) => {
  const { setCurrentSection } = props;

  return (
    <div
      id="work"
      onMouseOver={() => setCurrentSection(2)}
      style={{
        background: 'black',
        height: 500,
        width: '100%',
        color: 'orange',
      }}
    >
      Work section
    </div>
  );
};

export { WorkSection };
