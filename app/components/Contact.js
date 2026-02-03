'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Map from './Map';

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 80px; /* Account for fixed navbar */

  @media only screen and (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 0 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 20px 0;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 48px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: 2px solid #da4ea2;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  font-size: 16px;
  resize: vertical;

  &:focus {
    outline: 2px solid #da4ea2;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c23e8f;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_id',
        'template_id',
        ref.current,
        'public_key'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success !== null && (
              <span style={{ 
                color: success ? 'green' : 'red',
                marginTop: '10px' 
              }}>
                {success 
                  ? 'Your message has been sent. We\'ll get back to you soon :)' 
                  : 'Something went wrong. Please try again.'}
              </span>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;

