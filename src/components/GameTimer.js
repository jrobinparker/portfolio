import React, { useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { TextureLoader } from "three";
import { LASER_X_VELOCITY, LASER_Z_VELOCITY, LASER_RANGE, GROUND_HEIGHT, ENEMY_SPEED, carPositionState, enemyPositionState, targetPositionState, laserPositionState, scoreState } from "../gameState";

function distance(p1, p2) {
  const a = p2.x - p1.x;
  const b = p2.y - p1.y;
  const c = p2.z - p1.z;

  return Math.sqrt(a * a + b * b + c * c);
}

const GameTimer = () => {
  const [enemies, setEnemies] = useRecoilState(enemyPositionState);
  const [lasers, setLaserPositions] = useRecoilState(laserPositionState);
  const [score, setScore] = useRecoilState(scoreState);
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

    const hitEnemies = enemies
      ? enemies.map(
          (enemy) =>
            lasers.filter(
              (laser) =>
                lasers.filter((laser) => distance(laser, enemy) < 3).length > 0
            ).length > 0
        )
      : [];

    if (hitEnemies.includes(true) && enemies.length > 0) {
      setScore(score + hitEnemies.filter((hit) => hit).length);
      console.log("hit detected");
    }

    setEnemies(
      enemies
        .map((enemy) => ({ x: enemy.x, y: enemy.y, z: enemy.z + ENEMY_SPEED }))
        .filter((enemy, idx) => !hitEnemies[idx] && enemy.z < 0)
    );

  });

    return null
}

export default GameTimer;
