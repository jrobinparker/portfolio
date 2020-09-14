import React, { Fragment } from 'react';
import Lights from './Lights';
import Terrain from './Terrain';
import { Stars } from 'drei';

const Scene = () => {
  return (
    <Fragment>
      <fog attach="fog" args={['hotpink', 100, 700]} />
      <Lights />
      <Stars count={20000}/>
      <Terrain />
    </Fragment>
  )
};

export default Scene;
