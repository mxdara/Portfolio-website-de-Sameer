'use client';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  border-radius: 20px;
  padding: 40px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 30px 20px;
  }
`;

const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  max-width: 600px;
`;

const Atom = () => {
  return (
    <Container>
      <Title>Atomic Design</Title>
      <Description>
        We follow atomic design principles to create modular, reusable components
        that scale with your business needs.
      </Description>
    </Container>
  );
};

export default Atom;

