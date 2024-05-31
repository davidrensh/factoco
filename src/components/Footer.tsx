// src/components/Footer.tsx
import React from 'react';
import { Stack, Text, Link } from '@fluentui/react';

const Footer: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }} styles={{ root: { marginTop: 2, padding: 2, backgroundColor: '#888', color: 'white', justifyContent: 'center' } }}>
      {/* <Stack> */}
        <Text variant="xLarge" styles={{ root: { color: '#ffffff', fontWeight: 'bold' } }}>Factoco</Text>
        <Link href="/about" styles={{ root: { color: '#ffffff' } }}>About Us</Link>
        <Link href="/contact" styles={{ root: { color: '#ffffff' } }}>Contact</Link>
        <Link href="/privacy" styles={{ root: { color: '#ffffff' } }}>Privacy Policy</Link>
      {/* </Stack>
      <Stack> */}
        <Text variant="xLarge" styles={{ root: { color: '#ffffff', fontWeight: 'bold' } }}>Follow Us</Text>
        <Link href="https://www.facebook.com" target="_blank" styles={{ root: { color: '#ffffff' } }}>Facebook</Link>
        <Link href="https://www.instagram.com" target="_blank" styles={{ root: { color: '#ffffff' } }}>Instagram</Link>
        <Link href="https://www.twitter.com" target="_blank" styles={{ root: { color: '#ffffff' } }}>Twitter</Link>
      {/* </Stack> */}
    </Stack>
  );
};

export default Footer;
