import React from 'react';

const AboutSection = (props) => {
  const { setCurrentSection } = props;

  return (
    <div
      id="about"
      onMouseOver={() => setCurrentSection(1)}
      style={{
        background: 'black',
        height: 500,
        width: '100%',
        color: 'orange',
      }}
    >
      About section
    </div>
  );
};

export { AboutSection };
