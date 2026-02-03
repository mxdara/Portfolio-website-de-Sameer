'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #da4ea2;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c23e8f;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          {/* <Logo src="/img/logo.png" /> */}
          <List>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/studio">Studio</Link>
            </ListItem>
            <ListItem>
              <Link href="/works">Works</Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          {/* <Icon src="/img/search.png" /> */}
          <Button>Contact now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

