import React, { Fragment } from "react";
import Lights from "./Lights";
import Terrain from "./Terrain";
import Car from "./Car";
import { Sky } from "@react-three/drei";

const Scene = () => {
  return (
    <Fragment>
      <fog attach="fog" args={["hotpink", 200, 1200]} />
      <Sky
        distance={450000}
        inclination={0.5}
        azimuth={0.254}
        rayleigh={1.75}
        turbidity={20}
      />
      <Lights />
      <Car />
      <Terrain />
    </Fragment>
  );
};

export default Scene;
