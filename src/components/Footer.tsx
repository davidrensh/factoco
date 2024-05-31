import React from 'react';
import { Stack, Text, Link } from '@fluentui/react';

const Footer: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }} styles={{ root: { marginTop: 40, padding: 20, backgroundColor: '#333', color: 'white', justifyContent: 'center' } }}>
      <Stack>
        <Text variant="mediumPlus">Factoryou</Text>
        <Link href="/about" styles={{ root: { color: 'white' } }}>About Us</Link>
        <Link href="/contact" styles={{ root: { color: 'white' } }}>Contact</Link>
        <Link href="/privacy" styles={{ root: { color: 'white' } }}>Privacy Policy</Link>
      </Stack>
      <Stack>
        <Text variant="mediumPlus">Follow Us</Text>
        <Link href="#" styles={{ root: { color: 'white' } }}>Facebook</Link>
        <Link href="#" styles={{ root: { color: 'white' } }}>Instagram</Link>
        <Link href="#" styles={{ root: { color: 'white' } }}>Twitter</Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
