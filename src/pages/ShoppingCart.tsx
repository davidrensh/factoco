import React from 'react';
import { List, PrimaryButton, Text, Stack } from '@fluentui/react';

const ShoppingCart: React.FC = () => {
  // Replace with actual cart state
  const cartItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 }
  ];

  const handleCheckout = () => {
    // Redirect to Checkout Page
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Text variant="xxLarge">Shopping Cart</Text>
      <List>
        {cartItems.map(item => (
          <Stack horizontal key={item.id}>
            <Text variant="large">{item.name}</Text>
            <Text variant="medium">${item.price}</Text>
          </Stack>
        ))}
      </List>
      <Text variant="xLarge">Total: ${totalPrice}</Text>
      <PrimaryButton onClick={handleCheckout}>Checkout</PrimaryButton>
    </div>
  );
};

export default ShoppingCart;
