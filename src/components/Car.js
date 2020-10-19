import React, {useRef, Fragment, useEffect, useState, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import * as THREE from 'three';


const Car = () => {
  const [model, setModel] = useState();

  const scene = useLoader(GLTFLoader, 'car.glb')

  useEffect(() => {
    setModel(scene)
    console.log(scene)
  }, [])

  useFrame(() => {
    model.nodes.Front_Wheels.rotation.z += .25
    model.nodes.Back_Wheels.rotation.z += .25
    //model.nodes.DMC_Plane001.rotation.x = Math.sin(new Date() * 0.005) * 0.003;
  })

  return (
    model ? (
      <Fragment>
        <primitive object={model.nodes.car} position={[0, -1, 15]} rotation={[0, 3.15, 0]} scale={[20, 20, 20]}/>
        <pointLight
          intensity={5}
          position={[0, 0, 20]}
          color={'white'}
        />
      </Fragment>
    ) : null
  )
}

export default Car;