import React, { Fragment } from 'react';
import Lights from './Lights';
import Terrain from './Terrain';
import Car from './Car';
import Target from './Target';
import Laser from './Laser';
import LaserController from './LaserController';

const Scene = () => {

  return (
    <Fragment>
      <fog attach="fog" args={['hotpink', 200, 900]} />
      <Lights />
      <Target />
      <Car />
      <Terrain />
      <Laser />
      <LaserController />
    </Fragment>
  )
};

export default Scene;
