import React, { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

import Section from './section';
import img from '../public/sand-texture.png';

const Image = () => {
  const texture = useLoader(TextureLoader, img);

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

const ContactSection = (props) => {
  const { changeSection } = props;

  return (
    <Section id="contact" changeSection={changeSection}>
      <p>Contact section</p>
      <div style={{ height: 500, width: 500, backgroundColor: 'red' }}>
        <Canvas>
          <pointLight position={[0, 0, 10]} />
          <Suspense fallback={null}>
            <Image />
          </Suspense>
        </Canvas>
      </div>
    </Section>
  );
};

export default ContactSection;
