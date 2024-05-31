// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { Stack } from '@fluentui/react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Stack styles={{ root: { minHeight: '100vh' } }}>
      <Header />
      <Stack.Item grow styles={{ root: { padding: 20 } }}>
        {children}
      </Stack.Item>
      <Footer />
    </Stack>
  );
};

export default Layout;
