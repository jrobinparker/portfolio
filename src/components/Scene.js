import React, { Fragment } from 'react';
import Lights from './Lights';
import Terrain from './Terrain';
import Car from './Car';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from 'react-postprocessing';

const Scene = () => {

  return (
    <Fragment>
      <fog attach="fog" args={['hotpink', 200, 1200]} />
      <Lights />
      <Car />
      <Terrain />
    </Fragment>
  )
};

export default Scene;
