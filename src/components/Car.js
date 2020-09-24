import React, {useRef, Fragment, useEffect, useState, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import * as THREE from 'three';

const Car = () => {
  const [model, setModel] = useState();
  const [carPosition, setCarPosition] = useState();

  const scene = useLoader(GLTFLoader, 'car.glb')


  const accelerate = new KeyboardEvent('keypress', {
    key: 'enter',
  });

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
        car.current.rotation.y = car.current.rotation.y + .1

        if (car.current.rotation.y === 3.45) {
          car.current.rotation.y -= .1
        }
      }

      if (e.keyCode === 39) {
        car.current.rotation.y = car.current.rotation.y - .1
        if (car.current.rotation.y === 2.8499999999999996) {
          car.current.rotation.y += .1
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

  useFrame(() => {

  })

  model ? console.log(model) : console.log('not loaded')

  return (
    model ? (
      <Fragment>
        <primitive object={model.nodes.car} ref={car} position={[0, 0, 20]} rotation={[.15, 3.15, 0]}scale={[20, 20, 20]}/>
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
