import React, {useRef, Fragment, useEffect, useState} from "react";
import { useFrame, useUpdate, useResource, useLoader, useThree } from "react-three-fiber";
import { noise } from './perlin';
import grid from '../assets/grid.jpg';
import * as THREE from 'three';

const Terrain = () => {

  const mesh = useUpdate(({ geometry }) => {
    noise.seed(Math.random());
    let pos = geometry.getAttribute("position");
    let pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.1;
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
            noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }

    pos.needsUpdate = true;
  });

  const mesh2 = useUpdate(({ geometry }) => {
    noise.seed(Math.random());
    let pos = geometry.getAttribute("position");
    let pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.1;
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
            noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }

    pos.needsUpdate = true;
  });

  const road = useRef();
  const cityRef = useRef();
  const plane = useRef();

  const [texture] = useLoader(THREE.TextureLoader, [grid])

  if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(25, 1000);
    }


  let city = [], num = 100, distance = -20, offset = .0001

  for (let i = 0; i < num; i++) {
    offset += .5
    city.push(
      <mesh key={i} position={[distance + offset, -3, -800]}>
        <boxBufferGeometry attach="geometry" args={[Math.random() * 3, Math.random() * 15, 0]} />
        <meshPhongMaterial attach="material" color="#7E5E9A" flatShading={false} />
      </mesh>
    )
  }

  useFrame((offset) => {
    plane.current.position.z += .5
  })


  return (
    <Fragment>
    <mesh ref={plane} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, -100]}>
      <planeBufferGeometry attach="geometry" args={[100, 100000, 10, 10]} />
      <meshLambertMaterial
        attach="material"
        map={texture}
        depthTest
      />
    </mesh>
      <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 190]} position={[-120, -2, -600]}>
        <planeBufferGeometry attach="geometry" args={[400, 200, 400, 500]} />
        <meshPhongMaterial
          attach="material"
          color={"indianred"}
          specular={"indianred"}
          shininess={3}
          smoothShading
        />
      </mesh>

      <group ref={cityRef}>
      {city}
      </group>

      <mesh ref={mesh2} rotation={[-Math.PI / 2, 0, 190]} position={[120, -2, -600]}>
        <planeBufferGeometry attach="geometry" args={[400, 200, 400, 500]} />
        <meshPhongMaterial
          attach="material"
          color={"indianred"}
          specular={"indianred"}
          shininess={3}
          smoothShading
        />
      </mesh>

    </Fragment>
  );
};

export default Terrain;
