import React, {useRef, Fragment, useEffect} from "react";
import { useFrame, useUpdate, useResource, useLoader } from "react-three-fiber";
import { noise } from './perlin';
import { Curves } from 'three/examples/jsm/curves/CurveExtras';
import grid from '../assets/grid.jpg';
import grid2 from '../assets/grid2.jpg';
import * as THREE from 'three';
import { Sphere } from 'drei';

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

  const mesh3 = useUpdate(({ geometry }) => {
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

  const [texture, texture2] = useLoader(THREE.TextureLoader, [grid, grid2])

  if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 100000);
    }

  if (texture2) {
        texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
        texture2.repeat.set(100, 100);
    }

  let city = [], num = 100, distance = -20, offset = .0001

  for (let i = 0; i < num; i++) {
    offset += .5
    city.push(
      <mesh key={i} position={[distance + offset, -3, -800]}>
        <boxBufferGeometry attach="geometry" args={[Math.random() * 2.5, Math.random() * 15, 0]} />
        <meshPhongMaterial attach="material" color="#7E5E9A" flatShading={false} />
      </mesh>
    )
  }


  useFrame(() => {
    road.current.position.z += 1;
  })


  return (
    <Fragment>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeBufferGeometry attach="geometry" args={[300, 1200, 1, 1]} />
      <meshLambertMaterial
        attach="material"
        color={'black'}
      />
    </mesh>

    <mesh ref={road} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
      <planeBufferGeometry attach="geometry" args={[5, 1000000, 1, 1000]} />
      <meshLambertMaterial
        attach="material"
        map={texture}
        depthTest={false}
        repeat={10}
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

      <group>
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
