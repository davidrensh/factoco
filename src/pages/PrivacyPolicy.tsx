// src/pages/PrivacyPolicy.tsx
import React from 'react';
import { Stack, Text } from '@fluentui/react';

const PrivacyPolicy: React.FC = () => {
  return (
    <Stack styles={{ root: { padding: 20 } }}>
      <Text variant="xxLarge">Privacy Policy</Text>
      <Text variant="large">At Factoco, we respect your privacy and are committed...</Text>
    </Stack>
  );
};

export default PrivacyPolicy;
