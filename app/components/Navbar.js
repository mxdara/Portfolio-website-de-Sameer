'use client';

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
  background: linear-gradient(
      120deg,
      rgba(40, 45, 55, 0.65) 0%,
      rgba(40, 45, 55, 0.35) 50%,
      rgba(40, 45, 55, 0.55) 100%
    );
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 6px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
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
  color: white;
  font-weight: 500;
  letter-spacing: 0.2px;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
    padding: 8px 6px;
    display: inline-block;
    transition: color 200ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 2px;
    height: 2px;
    background: linear-gradient(90deg, #ff8bd7, #7ad8ff);
    opacity: 0;
    transform: scaleX(0.3);
    transform-origin: center;
    transition: opacity 200ms ease, transform 200ms ease;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 139, 215, 0.9) 0%,
    rgba(122, 216, 255, 0.9) 100%
  );
  color: #0b0f15;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 10px 24px rgba(255, 139, 215, 0.25);
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(122, 216, 255, 0.3);
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/#who">Studio</Link>
            </ListItem>
            <ListItem>
              <Link href="/#works">Works</Link>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Button>
            <Link href="/#contact">Contact now</Link>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
