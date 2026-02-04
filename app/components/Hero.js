'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px; /* Account for fixed navbar */

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 48px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c23e8f;
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
    font-size: 16px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  width: 100%;
  min-height: 420px;
  height: 60vh;
  overflow: hidden;
  border-radius: 24px;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 300px;
    min-height: 300px;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="/img/line.png" alt="" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas
            camera={{ position: [0, 0, 7], fov: 55 }}
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1.35} />
              <directionalLight position={[4, 3, 2]} intensity={1.25} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#6d2f8e"
                  attach="material"
                  distort={0.4}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
