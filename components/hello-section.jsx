import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';

import Section from './section';

const HelloSection = (props) => {
  const { changeSection } = props;
  const [light, setLight] = useState(10);

  return (
    <Section id="hello" changeSection={changeSection}>
      <p>Hello section</p>
      <div style={{ height: 500, width: 500, background: 'green' }}>
        <Canvas>
          <pointLight position={[10, light, 10]} />
          <mesh>
            <sphereBufferGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </Canvas>
      </div>
      <button onClick={() => setLight((light + 10) % 30)}>click</button>
    </Section>
  );
};

export default HelloSection;
