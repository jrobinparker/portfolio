import React, {useRef, Fragment, useEffect, useState, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import * as THREE from 'three';


const Car = () => {
  const [model, setModel] = useState();

  const scene = useLoader(GLTFLoader, 'car.glb')


  useEffect(() => {
    setModel(scene)
  }, [])


  return (
    model ? (
      <Fragment>
        <primitive object={model.nodes.car} position={[0, 0, 20]} rotation={[.15, 3.15, 0]} scale={[20, 20, 20]}/>
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
