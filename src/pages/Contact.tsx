// src/pages/Contact.tsx
import React from 'react';
import { Stack, Text } from '@fluentui/react';

const Contact: React.FC = () => {
  return (
    <Stack styles={{ root: { padding: 20 } }}>
      <Text variant="xxLarge">Contact Us</Text>
      <Text variant="large">For inquiries, please contact us at contact@factoco.com...</Text>
    </Stack>
  );
};

export default Contact;
