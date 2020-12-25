import React from 'react';

import { Section } from './section';

const AboutSection = (props) => {
  const { changeSection } = props;

  return (
    <Section id="about" changeSection={changeSection}>
      <p>About section</p>
    </Section>
  );
};

export { AboutSection };
