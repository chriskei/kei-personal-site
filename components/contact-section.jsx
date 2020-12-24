import React from 'react';

const ContactSection = (props) => {
  const { setCurrentSection } = props;

  return (
    <div
      id="contact"
      onMouseOver={() => setCurrentSection(3)}
      style={{
        background: 'black',
        height: 500,
        width: '100%',
        color: 'orange',
      }}
    >
      Contact section
    </div>
  );
};

export { ContactSection };
