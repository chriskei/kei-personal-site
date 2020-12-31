import React from 'react';

import Section from './section';

const ContactSection = (props) => {
  const { changeSection } = props;

  return (
    <Section id="contact" changeSection={changeSection}>
      <p>Contact section</p>
    </Section>
  );
};

export default ContactSection;
