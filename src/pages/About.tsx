// src/pages/About.tsx
import React from 'react';
import { Stack, Text } from '@fluentui/react';

const About: React.FC = () => {
  return (
    <Stack styles={{ root: { padding: 20 } }}>
      <Text variant="xxLarge">About Us</Text>
      <Text variant="large">Welcome to Factoco. We are a leading furniture store...</Text>
    </Stack>
  );
};

export default About;
