// src/pages/ShoppingCart.tsx
import React from 'react';
import { Container, List, ListItem, Button } from '@fluentui/react';

const ShoppingCart: React.FC = () => {
  // Replace with actual cart state
  const cartItems = [];

  const handleCheckout = () => {
    // Redirect to Checkout Page
  };

  return (
    <Container>
      <Typography variant="h2">Shopping Cart</Typography>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>
      <Button onClick={handleCheckout}>Checkout</Button>
    </Container>
  );
};

export default ShoppingCart;
