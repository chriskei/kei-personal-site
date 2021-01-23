import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import Image from './image';
import Section from './section';
import Text from './text';

import sandImg from '../public/sand-texture.png';

const ContactSection = (props) => {
  const { changeSection } = props;

  return (
    <Section id="contact" changeSection={changeSection}>
      <Canvas>
        <pointLight position={[0, 0, 10]} />
        <Text x={-100} y={250}>Designed, Developed, and Deployed by Christopher Kei • 2020</Text>
        <Suspense fallback={null}>
          <Image img={sandImg} x={3} y={3} />
        </Suspense>
      </Canvas>
    </Section>
  );
};

export default ContactSection;
