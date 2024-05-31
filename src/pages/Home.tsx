import React from 'react';
import { Stack } from '@fluentui/react';
import HeroSection from '../components/HeroSection';
import NavigationMenu from '../components/NavigationMenu';
import FeaturedCollections from '../components/FeaturedCollections';
import PromotionalBanners from '../components/PromotionalBanners';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <Stack>
      <NavigationMenu />
      <HeroSection />
      <FeaturedCollections />
      <PromotionalBanners />
      <Footer />
    </Stack>
  );
};

export default Home;
