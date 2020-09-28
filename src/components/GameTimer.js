import React, { useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { TextureLoader } from "three";
import { LASER_X_VELOCITY, LASER_Z_VELOCITY, LASER_RANGE, GROUND_HEIGHT, carPositionState, targetPositionState, laserPositionState } from "../gameState";

const GameTimer = () => {
  const [lasers, setLaserPositions] = useRecoilState(laserPositionState);
  const carPosition = useRecoilValue(carPositionState);
  const targetPosition = useRecoilValue(targetPositionState);

  useFrame(() => {

    if (carPosition.rotation.y === 3.15) {
      setLaserPositions(
        lasers
          .map((laser) => ({
           id: laser.id,
           x: laser.x,
           y: laser.y,
           z: laser.z - LASER_Z_VELOCITY
         }))
         .filter((laser) => laser.z > -LASER_RANGE)
      )
    }

    if (carPosition.rotation.y >= 3.25) {
      setLaserPositions(
        lasers
          .map((laser) => ({
           id: laser.id,
           x: laser.x - LASER_X_VELOCITY,
           y: laser.y,
           z: laser.z - LASER_Z_VELOCITY
         }))
         .filter((laser) => laser.z > -LASER_RANGE)
      )
    }


    if (carPosition.rotation.y <= 3.05) {
      setLaserPositions(
        lasers
          .map((laser) => ({
           id: laser.id,
           x: laser.x + LASER_X_VELOCITY,
           y: laser.y,
           z: laser.z - LASER_Z_VELOCITY
         }))
         .filter((laser) => laser.z > -LASER_RANGE)
      )
    }
  });

    return null
}

export default GameTimer;
