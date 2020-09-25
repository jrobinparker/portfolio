import { atom } from "recoil";

export const carPositionState = atom({
  key: "carPosition",
  default: { position: {x: 0, y: 0, z: 20}, rotation: {x: .15, y: 3.15, z: 0} }
});

export const enemyPositionState = atom({
  key: "enemyPosition",
  default: [{ x: -10, y: 10, z: -80 }, { x: 20, y: 20, z: -100 }]
});

export const laserPositionState = atom({
  key: "laserPositions",
  default: []
});

export const scoreState = atom({
  key: "score",
  default: 0
});
