import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { TextureLoader } from "three";
import { carPositionState, laserPositionState } from "../gameState";

const Lasers = () => {
  const lasers = useRecoilValue(laserPositionState);
  return (
    <group>
      {lasers.map((laser) => (
        <mesh position={[laser.x, laser.y, laser.z]} key={`${laser.id}`}>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" emissive="white" wireframe />
        </mesh>
      ))}
    </group>
  );
}

export default Lasers
