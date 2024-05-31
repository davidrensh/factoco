// src/pages/Checkout.tsx
import React from 'react';
import { TextField, PrimaryButton } from '@fluentui/react';

const Checkout: React.FC = () => {
  const handlePayment = () => {
    // Payment logic here
  };

  return (
    <div>
      <h2>Checkout</h2>
      <TextField label="Credit Card Number" />
      <TextField label="Expiry Date" />
      <TextField label="CVC" />
      <PrimaryButton onClick={handlePayment}>Pay Now</PrimaryButton>
    </div>
  );
};

export default Checkout;
