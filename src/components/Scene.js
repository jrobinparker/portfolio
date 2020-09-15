import React, { Fragment } from 'react';
import Lights from './Lights';
import Terrain from './Terrain';

const Scene = () => {
  return (
    <Fragment>
      <fog attach="fog" args={['hotpink', 100, 700]} />
      <Lights />
      <Terrain />
    </Fragment>
  )
};

export default Scene;
