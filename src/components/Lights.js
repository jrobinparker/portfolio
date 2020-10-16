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
      <ambientLight ref={ref2} position={[40, -1, -900]} intensity={0.5} />
      <directionalLight intensity={1} position={[40, -1, -900]} color={'white'} />
      <directionalLight intensity={2.5} position={[0, 5, 10]} color={'white'} />
      <pointLight
        ref={ref}
        intensity={1}
        position={[10, -1, -300]}
        color={'white'}
      >
      </pointLight>
      <pointLight
        ref={ref3}
        intensity={1}
        position={[-10, -1, -500]}
        color={'white'}
      >
      </pointLight>
    </group>
  );
};
