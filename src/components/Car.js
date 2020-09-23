import React, {useRef, Fragment, useEffect, useState, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import * as THREE from 'three';

const Car = () => {
  const [model, setModel] = useState();
  const [carPosition, setCarPosition] = useState();

  const scene = useLoader(GLTFLoader, 'car.glb')

  useEffect(() => {
    setModel(scene)
  }, [])

  const car = useRef();


  model ? console.log(model) : console.log('not loaded')

  return (
    model ?   <primitive object={model.nodes.car} ref={car} position={[0, 0, 20]} rotation={[.15, 3.15, 0]}scale={[20, 20, 20]}/>: null
  )
}

export default Car;
