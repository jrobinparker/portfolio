import React from 'react';
import { enemyPositionState, enemyCountState } from "../gameState";
import { RecoilRoot, useRecoilValue } from "recoil";

const Enemies = () => {
  const enemies = useRecoilValue(enemyPositionState);
  return (
    <group>
      {enemies.map((enemy) => (
        <mesh position={[enemy.x, enemy.y, enemy.z]} key={`${enemy.x}`}>
          <sphereBufferGeometry attach="geometry" args={[1, 2, 2]} />
          <meshStandardMaterial attach="material" color="white" wireframe />
        </mesh>
      ))}
    </group>
  );
};

export default Enemies;
