import React from 'react';
import { RecoilRoot, useRecoilValue } from "recoil";
import { laserPositionState } from "../gameState";

const Lasers = () => {
  const lasers = useRecoilValue(laserPositionState);
  return (
    <group>
      {lasers.map((laser) => (
        <mesh position={[laser.x, laser.y, laser.z]} key={`${laser.id}`}>
          <boxBufferGeometry attach="geometry" args={[.25, .25, 1]} />
          <meshStandardMaterial attach="material" color="hotpink" />
        </mesh>
      ))}
    </group>
  );
}

export default Lasers
