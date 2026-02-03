'use client';

import styled from 'styled-components';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/img/bg.jpeg');
`;

const Title = styled.h1`
  font-size: 74px;
  margin-bottom: 20px;
`;

const CanvasContainer = styled.div`
  width: 800px;
  height: 600px;
`;

const Studio = () => {
  return (
    <Container>
      <Title>Studio</Title>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </Container>
  );
};

export default Studio;

