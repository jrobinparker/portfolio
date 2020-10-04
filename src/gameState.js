import { atom } from "recoil";

export const LASER_RANGE = 150;
export const LASER_Z_VELOCITY = 20;
export const LASER_X_VELOCITY = .5;
export const ENEMY_SPEED = 0.1;
export const ENEMY_DISTANCE = 1;
export const GROUND_HEIGHT = -50;

export const carPositionState = atom({
  key: "carPosition",
  default: { position: {x: 0, y: 0, z: 20}, rotation: {x: .15, y: 3.15, z: 0} }
});

export const targetPositionState = atom({
  key: "targetPosition",
  default: { position: {x: 0, y: 0.5, z: -8}, rotation: {x: .15, y: 3.15, z: 0} }
});

export const enemyPositionState = atom({
  key: "enemyPosition",
  default: [{ x: -3, y: 1, z: -80 }, { x: 3, y: 1, z: -100 }]
});

export const enemyCountState = atom({
  key: "enemyCount",
  default: 100
})

export const laserPositionState = atom({
  key: "laserPositions",
  default: []
});

export const scoreState = atom({
  key: "score",
  default: 0
});
