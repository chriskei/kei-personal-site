import React from 'react';
import * as THREE from 'three';

import Nunito from '../public/Nunito_Regular.json';

const Text = (props) => {
  const { children, x = 0, y = 0 } = props;
  const font = new THREE.FontLoader().parse(Nunito);
  const textOptions = { font, size: 0.2, height: 0.02 };

  return (
    <mesh position={[-2 + x / 50, 2 - y / 50, 0]}>
      <textGeometry args={[children, textOptions]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Text;
