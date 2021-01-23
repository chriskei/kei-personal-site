import React from 'react';
import { useLoader, useThree } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

const Image = (props) => {
  const { img, x, y } = props;
  const { viewport } = useThree();
  const texture = useLoader(TextureLoader, img);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = x;
  texture.repeat.y = y;

  return (
    <mesh>
      <planeBufferGeometry
        attach="geometry"
        args={[viewport.width, viewport.height]}
      />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Image;
