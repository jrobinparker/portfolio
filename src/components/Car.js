import React, {useRef, Fragment, useEffect, useState, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import * as THREE from 'three';
import { RecoilRoot, useRecoilState } from "recoil";
import { carPositionState } from "../gameState";


const Car = () => {
  const [model, setModel] = useState();
  const [carPosition, setCarPosition] = useRecoilState(carPositionState);

  const scene = useLoader(GLTFLoader, 'car.glb')


  useEffect(() => {
    setModel(scene)
    function handleKeyDown(e) {
      if (e.keyCode === 38) {
        car.current.position.z -= 1

        if (car.current.position.z === -5) {
          car.current.position.z += 1
        }
      }

      if (e.keyCode === 40) {
        car.current.position.z += 1

        if (car.current.position.z >= 20) {
          car.current.position.z -= 1
        }
      }

      if (e.keyCode === 37) {
        car.current.rotation.y += .1

        if (car.current.rotation.y === 3.35) {
          car.current.rotation.y -= .1
        }
      }

      if (e.keyCode === 39) {
        car.current.rotation.y -= .1
        if (car.current.rotation.y === 2.9499999999999997) {
          car.current.rotation.y += .1
        }
    }

    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  const car = useRef();

  useFrame(() => {
    setCarPosition({
      position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z },
      rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z }
    })
  });

  return (
    model ? (
      <Fragment>
        <primitive object={model.nodes.car} ref={car} position={[0, 0, 20]} rotation={[carPosition.rotation.x, carPosition.rotation.y, 0]} scale={[20, 20, 20]}/>
        <pointLight
          intensity={10}
          position={[1, 2, 0]}
          color={'white'}
        />
      </Fragment>
    ) : null
  )
}

export default Car;
