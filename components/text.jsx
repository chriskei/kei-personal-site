import React from 'react';
import * as THREE from 'three';

import Nunito from '../public/Nunito_Regular.json';

const Text = (props) => {
  const { children, position } = props;
  const font = new THREE.FontLoader().parse(Nunito);
  const textOptions = { font, size: 1, height: 0.1 };

  return (
    <mesh position={[-2 + position / 50, 0, 0]}>
      <textGeometry args={[children, textOptions]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Text;
