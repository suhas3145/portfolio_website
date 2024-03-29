import React from "react";
import { OrbitControls ,Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";



const ProductDesign = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
        <Stage environment="city" intensity={0.6}>
          <Shoe/>

        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
  )
}

export default ProductDesign
