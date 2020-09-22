import React from 'react';
import { useResource, useFrame } from 'react-three-fiber';

export default () => {
  const sphere = useResource();
  const Moon = () => (
    <mesh ref={sphere} position={[40, -1, -900]}>
      <sphereBufferGeometry attach='geometry' args={[6, 100, 100]} />
      <meshBasicMaterial attach='material' color={'white'} />
    </mesh>
  );

  const [ref, pLight1] = useResource();
  const [ref2, pLight2] = useResource();
  const ref3 = useResource();

  useFrame(() =>{
    if (sphere.current.position.y >= 4) {
      return
    } else {
      ref2.current.position.y += 0.005;
      ref3.current.position.y += 0.005;
      sphere.current.position.y += 0.003;
    }
  })

  return (
    <group>
      <Moon />
      <ambientLight ref={ref2} position={[40, -1, -900]} intensity={0.5} />
      <directionalLight intensity={1} position={[40, -1, -900]} color={'white'} />
      <pointLight
        ref={ref}
        intensity={10}
        position={[10, -1, -900]}
        color={'white'}
      >
      </pointLight>
      <pointLight
        ref={ref3}
        intensity={10}
        position={[-10, -1, -500]}
        color={'white'}
      >
      </pointLight>
    </group>
  );
};
