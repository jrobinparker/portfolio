import React from 'react';
import { useResource, useFrame } from 'react-three-fiber';

export default () => {
  const sphere = useResource();
  const Moon = () => (
    <mesh ref={sphere} position={[50, -1, -600]}>
      <sphereBufferGeometry attach='geometry' args={[6, 100, 100]} />
      <meshBasicMaterial attach='material' color={'white'} />
    </mesh>
  );

  const [ref, pLight1] = useResource();
  const [ref2, pLight2] = useResource();

  useFrame(() =>{
    if (sphere.current.position.y >= 4) {
      return
    } else {
      sphere.current.position.y += 0.003;
    }
  })

  return (
    <group>
      <Moon />
      <ambientLight ref={ref2} position={[0, 4, 0]} intensity={0.5} />
      <directionalLight intensity={0.5} position={[10, 0, 0]} color={0xffffff} />
      <pointLight
        ref={ref}
        intensity={10}
        position={[50, 3, -600]}
        color={'#B5C7D3'}
      >
      </pointLight>
      <pointLight
        intensity={1.9}
        position={[50, 3, -600]}
        color={'#B5C7D3'}
      >
      </pointLight>
    </group>
  );
};
