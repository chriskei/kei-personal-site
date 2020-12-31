import React from 'react';

import Section from './section';

const HelloSection = (props) => {
  const { changeSection } = props;

  return (
    <Section id="hello" changeSection={changeSection}>
      <p>Hello section</p>
    </Section>
  );
};

export default HelloSection;
