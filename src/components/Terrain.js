import React, {useRef, Fragment} from "react";
import { useFrame, useUpdate, useResource } from "react-three-fiber";
import { noise } from './perlin';

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

  const ground = useRef();

  useFrame(() => {
    ground.current.position.z += 1;
  })

  return (
    <Fragment>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]}>
        <planeBufferGeometry attach="geometry" args={[100000, 100000, 128, 128]} />
        <meshPhongMaterial
          attach="material"
          color={"black"}
        />
      </mesh>
      <mesh ref={ground} rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]}>
        <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
        <meshLambertMaterial
          attach="material"
          color={"hotpink"}
          wireframe
        />
      </mesh>

      <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, -700]}>
        <planeBufferGeometry attach="geometry" args={[300, 1000, 400, 500]} />
        <meshPhongMaterial
          attach="material"
          color={"hotpink"}
          specular={"hotpink"}
          shininess={3}
          smoothShading
        />
      </mesh>
    </Fragment>
  );
};

export default Terrain;