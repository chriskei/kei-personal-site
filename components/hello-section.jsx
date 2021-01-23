import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';

import Section from './section';
import Text from './text';

const HelloSection = (props) => {
  const { changeSection, position } = props;
  const [light, setLight] = useState(10);

  return (
    <Section id="hello" changeSection={changeSection}>
      <p>Hello section</p>
      <div style={{ height: 500, width: 500 }}>
        <Canvas>
          <pointLight position={[10, light, 10]} />
          {position !== 0 && (
            <mesh position={[0, position / 100, 0]}>
              <sphereBufferGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          )}
          <Text x={position}>hi</Text>
        </Canvas>
      </div>
      <button type="button" onClick={() => setLight((light + 10) % 30)}>
        click
      </button>
    </Section>
  );
};

export default HelloSection;
