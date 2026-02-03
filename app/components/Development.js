'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Shoe from './Shoe';

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: #333;
  font-size: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 20px auto;
    width: 90%;
    height: auto;
    text-align: center;
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const Development = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        We build robust and scalable applications using modern technologies
        and best practices.
      </Desc>
    </CanvasContainer>
  );
};

export default Development;

