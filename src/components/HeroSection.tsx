import React from 'react';
import { Image, Text } from '@fluentui/react';

const HeroSection: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Image src="/images/hero.jpg" alt="Hero Image" styles={{ root: { width: '100%', height: 'auto' } }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
        <Text variant="xxLargePlus">Welcome to Factoryou</Text>
        <Text variant="large">Discover our premium furniture collections</Text>
      </div>
    </div>
  );
};

export default HeroSection;
