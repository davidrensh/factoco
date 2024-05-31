import React from 'react';
import { Stack, Image, Text } from '@fluentui/react';

const collections = [
  { title: 'New Arrivals', imageUrl: '/images/new-arrivals.jpg' },
  { title: 'Best Sellers', imageUrl: '/images/best-sellers.jpg' },
  { title: 'Exclusive Collections', imageUrl: '/images/exclusive-collections.jpg' },
];

const FeaturedCollections: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }} styles={{ root: { marginTop: 20, justifyContent: 'center' } }}>
      {collections.map((collection, index) => (
        <Stack.Item key={index} styles={{ root: { width: 300 } }}>
          <Image src={collection.imageUrl} alt={collection.title} styles={{ root: { width: '100%', height: 'auto' } }} />
          <Text variant="large" styles={{ root: { textAlign: 'center', marginTop: 10 } }}>{collection.title}</Text>
        </Stack.Item>
      ))}
    </Stack>
  );
};

export default FeaturedCollections;
