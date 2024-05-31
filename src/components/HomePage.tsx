// src/components/HomePage.tsx
import React from 'react';
import { Stack, Text } from '@fluentui/react';

const HomePage: React.FC = () => {
  return (
    <Stack styles={{ root: { padding: 20 } }}>
      <Text variant="xxLarge" styles={{ root: { marginBottom: 20 } }}>Welcome to Factoco</Text>
      <Text variant="large">
        Factoco offers a wide range of high-quality furniture for your living room, bedroom, dining room, and office. Explore our categories and find the perfect pieces to enhance your home.
      </Text>
    </Stack>
  );
};

export default HomePage;

