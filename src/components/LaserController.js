import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { TextureLoader } from "three";
import { carPositionState, laserPositionState } from "../gameState";

const LaserController = () => {
  const carPosition = useRecoilValue(carPositionState);
  const [lasers, setLasers] = useRecoilState(laserPositionState);

  const shoot = e => {
    if (e.keyCode === 32) {
      setLasers([
        ...lasers,
        {
          id: Math.random(),
          x: 0,
          y: 0,
          z: 0,
          velocity: [
            carPosition.rotation.x = carPosition.rotation.x * 100,
            carPosition.rotation.y = carPosition.rotation.y * 100
          ],
        },
      ])
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', shoot)
  }, [])

  return (
    <mesh
      position={[0, 0, -8]}
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
