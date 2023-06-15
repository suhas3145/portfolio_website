import React from "react";
import { OrbitControls ,Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";


const Development = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Stage environment="city" intensity={0.6}>
          <Atom/>

        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </>
  )
}

export default Development;