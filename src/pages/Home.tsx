// src/pages/Home.tsx
import React from 'react';
import { Container, Typography } from '@fluentui/react';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1">Welcome to Factoryou</Typography>
      <Typography variant="body1">Discover our premium furniture...</Typography>
    </Container>
  );
};

export default Home;
