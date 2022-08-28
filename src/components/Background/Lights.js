import React from "react";

const Lights = () => {
  return (
    <group>
      <ambientLight position={[-1, 0, 0]} intensity={0.5} />
      <ambientLight position={[-1, 1, -800]} intensity={0.25} />
    </group>
  );
};

export default Lights;
