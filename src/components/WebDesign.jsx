import {OrbitControls , Stage} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mac from './Mac'
import styled from 'styled-components'



const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Mac/>
      </Stage>
      
      <OrbitControls enableZoom={false}/>
    </Canvas>

    </>
  )
}

export default WebDesign
