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
        setCarPosition({
          position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
          rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
        })

        if (car.current.position.z === -5) {
          car.current.position.z += 1
          setCarPosition({
            position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
            rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
          })

        }
      }

      if (e.keyCode === 40) {
        car.current.position.z += 1
        setCarPosition({
          position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
          rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
        })

        if (car.current.position.z >= 20) {
          car.current.position.z -= 1
          setCarPosition({
            position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
            rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
          })

        }
      }

      if (e.keyCode === 37) {
        car.current.rotation.y = car.current.rotation.y + .1
        setCarPosition({
          position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
          rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
        })

        if (car.current.rotation.y === 3.45) {
          car.current.rotation.y -= .1
          setCarPosition({
            position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
            rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
          })

        }
      }

      if (e.keyCode === 39) {
        car.current.rotation.y = car.current.rotation.y - .1
        setCarPosition({
          position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
          rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
        })

        if (car.current.rotation.y === 2.8499999999999996) {
          car.current.rotation.y += .1
          setCarPosition({
            position: { x: car.current.position.x, y: car.current.position.y, z: car.current.position.z},
            rotation: { x: car.current.rotation.x, y: car.current.rotation.y, z: car.current.rotation.z},
          })

        }

    }}

    function handleKeyUp(e) {
      if (e.keyCode === 38) {
        //car.current.position.z = 20
        car.current.rotation.x = .15
      }

    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [])

  const car = useRef();


  return (
    model ? (
      <Fragment>
        <primitive object={model.nodes.car} ref={car} position={[carPosition.position.x, carPosition.position.y, carPosition.position.z]} rotation={[carPosition.rotation.x, carPosition.rotation.y, carPosition.rotation.z]}scale={[20, 20, 20]}/>
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
