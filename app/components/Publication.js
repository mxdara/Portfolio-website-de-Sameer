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
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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

const Publication = () => {
  return (
    <Container>
      <Title>Publications</Title>
      <Description>
        We share our knowledge through articles, papers, and talks.
        Our research contributes to the advancement of design and technology
        in the industry.
      </Description>
    </Container>
  );
};

export default Publication;

