import React from 'react';
import { useResource, useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import sun from '../assets/sun.jpg';

export default () => {
  const sphere = useResource();

  const texture = useLoader(THREE.TextureLoader, sun)

  if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 2);
    }

  const Moon = () => (
    <mesh ref={sphere} position={[40, -1, -900]}>
      <sphereBufferGeometry attach='geometry' args={[20, 100, 100]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        depthTest
      />
    </mesh>
  );

  const [ref, pLight1] = useResource();
  const [ref2, pLight2] = useResource();
  const ref3 = useResource();

  return (
    <group>
      <Moon />
      <ambientLight ref={ref2} position={[-1, 0, 0]} intensity={0.5} />
      <ambientLight position={[-1, 1, -800]} intensity={.25} />
    </group>
  );
};
