'use client';

import React, { useState } from 'react';
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

const Honeypot = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
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
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      message: String(data.get('message') || '').trim(),
      website: String(data.get('website') || '').trim(), // honeypot
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(json?.error || 'Something went wrong.');
        setStatus('success');
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
        setErrorMessage(err?.message || 'Something went wrong.');
      });
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Honeypot
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              name="website"
            />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </Button>
            {status === 'success' && (
              <span style={{ color: 'green', marginTop: '10px' }}>
                Your message has been sent. We'll get back to you soon :)
              </span>
            )}
            {status === 'error' && (
              <span style={{ color: 'red', marginTop: '10px' }}>
                {errorMessage || 'Something went wrong. Please try again.'}
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
