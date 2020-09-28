import React, { useEffect, useState } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { useFrame } from 'react-three-fiber';
import { TextureLoader } from "three";
import { carPositionState, targetPositionState, laserPositionState } from "../gameState";

const LaserController = () => {
  const carPosition = useRecoilValue(carPositionState);
  const targetPosition = useRecoilValue(targetPositionState);

  const [lasers, setLasers] = useRecoilState(laserPositionState);
  const [ currentCarPos, setCurrentCarPos ] = useState();

  const shoot = e => {
    if (e.keyCode === 32) {
      setLasers([
        ...lasers,
        {
          id: Math.random(),
           x: .15,
           y: 0,
           z: 21,
           velocity: [
             -Math.sin(carPosition.rotation.y),
             0,
             Math.sin(carPosition.rotation.y),
           ]
        }
      ])
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', shoot)
  }, [])

  return (
    <mesh
      position={[0, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial
        attach="material"
        color="orange"
        emissive="#ff0860"
        visible={false}
      />
    </mesh>
  );
}

export default LaserController
