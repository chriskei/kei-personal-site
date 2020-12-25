import React from 'react';

import { Section } from './section';

const WorkSection = (props) => {
  const { changeSection } = props;

  return (
    <Section id="work" changeSection={changeSection}>
      <p>Work section</p>
    </Section>
  );
};

export { WorkSection };
