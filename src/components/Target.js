import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
import { RecoilRoot, useRecoilState } from "recoil";
import { targetPositionState } from "../gameState";


const Target = () => {
  const [targetPosition, setTargetPosition] = useRecoilState(targetPositionState);

  const rTarget = useRef();

  const loader = new TextureLoader();

  const targetSprite = loader.load('target.png');

  useEffect(() => {
    function handleKeyDown(e) {

      if (e.keyCode === 38) {
        rTarget.current.position.z = rTarget.current.position.z - 1
        setTargetPosition({
          position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
          rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
        })
        if (rTarget.current.position.z === -33) {
          rTarget.current.position.z += 1
          setTargetPosition({
            position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
            rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
          })
        }
      }

      if (e.keyCode === 40) {
        rTarget.current.position.z = rTarget.current.position.z + 1
        setTargetPosition({
          position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
          rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
        })
        if (rTarget.current.position.z >= -8) {
          rTarget.current.position.z -= 1
          setTargetPosition({
            position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
            rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
          })
        }
      }

      if (e.keyCode === 37) {
        rTarget.current.position.x = rTarget.current.position.x - 1
        console.log(rTarget.current.position.x)
        setTargetPosition({
          position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
          rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
        })
        if (rTarget.current.position.x === -2) {
          rTarget.current.position.x += 1
          setTargetPosition({
            position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
            rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
          })
        }
      }

      if (e.keyCode === 39) {
        rTarget.current.position.x = rTarget.current.position.x + 1
        setTargetPosition({
          position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
          rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
        })
        if (rTarget.current.position.x === 2) {
          rTarget.current.position.x -= 1
          setTargetPosition({
            position: { x: rTarget.current.position.x, y: rTarget.current.position.y, z: rTarget.current.position.z},
            rotation: { x: rTarget.current.rotation.x, y: rTarget.current.rotation.y, z: rTarget.current.rotation.z},
          })
        }
      }
  }

  document.addEventListener('keydown', handleKeyDown);

  // Don't forget to clean up
  return function cleanup() {
    document.removeEventListener('keydown', handleKeyDown);
  }

}, [])

useFrame(() => {
  rTarget.current.visible = !rTarget.current.visible
})

  return (
    <group>
      <sprite position={[targetPosition.position.x, targetPosition.position.y, targetPosition.position.z]} scale={[-1, -1, -1]} ref={rTarget}>
        <spriteMaterial attach="material" map={targetSprite} />
      </sprite>
    </group>
  )
}

export default Target
