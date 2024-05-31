// src/pages/Checkout.tsx
import React from 'react';
import { Container, TextField, Button } from '@fluentui/react';

const Checkout: React.FC = () => {
  const handlePayment = () => {
    // Payment logic here
  };

  return (
    <Container>
      <Typography variant="h2">Checkout</Typography>
      <TextField label="Credit Card Number" />
      <TextField label="Expiry Date" />
      <TextField label="CVC" />
      <Button onClick={handlePayment}>Pay Now</Button>
    </Container>
  );
};

export default Checkout;
