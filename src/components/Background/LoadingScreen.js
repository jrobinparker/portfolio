import React from 'react';
import { Html, useProgress } from '@react-three/drei'

const LoadingScreen = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="loading">
        <div className="glitch">
          <span>{progress} % LOADED</span>
          <span>{progress} % LOADED</span>
          <span>{progress} % LOADED</span>
        </div>
      </div>
    </Html>
  )
}

export default LoadingScreen;
