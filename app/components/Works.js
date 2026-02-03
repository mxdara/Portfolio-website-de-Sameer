'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Development from './Development';
import ProductDesign from './ProductDesign';
import WebDesign from './WebDesign';
import Publication from './Publication';
import SocialMedia from './SocialMedia';

const data = [
  'Web Design',
  'Development',
  'Product Design',
  'Publications',
  'Social Media',
];

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  padding-top: 80px; /* Account for fixed navbar */

  @media only screen and (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  font-style: normal;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: all 0.3s ease;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.5s ease;
  }

  &:hover {
    ::after {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const Works = () => {
  const [work, setWork] = useState('Web Design');
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item}
                text={item}
                onMouseEnter={() => setWork(item)}
                onFocus={() => setWork(item)}
                tabIndex={0}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === 'Web Design' ? (
            <WebDesign />
          ) : work === 'Development' ? (
            <Development />
          ) : work === 'Product Design' ? (
            <ProductDesign />
          ) : work === 'Publications' ? (
            <Publication />
          ) : (
            <SocialMedia />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;

