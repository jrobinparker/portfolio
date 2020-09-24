import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

const Target = () => {
  const rTarget = useRef();

  const loader = new TextureLoader();

  const targetSprite = loader.load('target.png');

  useEffect(() => {
    function handleKeyDown(e) {

      if (e.keyCode === 38) {
        rTarget.current.position.z = rTarget.current.position.z - 1
        if (rTarget.current.position.z === -33) {
          rTarget.current.position.z += 1
        }
      }

      if (e.keyCode === 40) {
        rTarget.current.position.z = rTarget.current.position.z + 1

        if (rTarget.current.position.z >= -8) {
          rTarget.current.position.z -= 1
        }
      }

      if (e.keyCode === 37) {
        rTarget.current.position.x = rTarget.current.position.x - 2
        console.log(rTarget.current.position.x)
        if (rTarget.current.position.x === -6) {
          rTarget.current.position.x += 2
        }
      }

      if (e.keyCode === 39) {
        rTarget.current.position.x = rTarget.current.position.x + 2
        console.log(rTarget.current.position.x)

        if (rTarget.current.position.x === 6) {
          rTarget.current.position.x -= 2
        }
      }
  }

  document.addEventListener('keydown', handleKeyDown);

  // Don't forget to clean up
  return function cleanup() {
    document.removeEventListener('keydown', handleKeyDown);
  }

}, [])

  return (
    <group>
      <sprite position={[0, 0.5, -8]} scale={[-1, -1, -1]} ref={rTarget}>
        <spriteMaterial attach="material" map={targetSprite} />
      </sprite>
    </group>
  )
}

export default Target
