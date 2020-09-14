import React from 'react';
import { useResource, useFrame } from 'react-three-fiber';

export default () => {
  const sphere = useResource();
  const Moon = () => (
    <mesh ref={sphere} position={[10, 1, -900]}>
      <sphereBufferGeometry attach='geometry' args={[0.7, 30, 30]} />
      <meshBasicMaterial attach='material' color={'white'} />
    </mesh>
  );

  const [ref, pLight1] = useResource();
  const [ref2, pLight2] = useResource();
  // Move lights
  useFrame(() => {
    if (ref.current.position.x === 10) {
      ref.current.position.x -= 0.01;
    } else {
      ref.current.position.z += 0.0001;
      ref.current.position.y += 0.0001;
    }
    sphere.current.position.y += 0.0001;
    sphere.current.position.z += 0.0001;
  });

  return (
    <group>
      <Moon />
      <ambientLight ref={ref2} position={[0, 4, 0]} intensity={0.3} />
      <directionalLight intensity={0.5} position={[10, 0, 0]} color={0xffffff} />
      <pointLight
        ref={ref}
        intensity={10}
        position={[10, 2, -200]}
        color={'#B5C7D3'}
      >
      </pointLight>
      <pointLight
        intensity={1.9}
        position={[10, 2, -200]}
        color={'#B5C7D3'}
      >
      </pointLight>
    </group>
  );
};
