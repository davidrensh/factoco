import React from 'react';
import { Stack, Text } from '@fluentui/react';

const banners = [
  { message: 'Free Shipping on orders over $500', link: '/shipping' },
  { message: 'Spring Sale - Up to 30% off', link: '/sale' },
];

const PromotionalBanners: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }} styles={{ root: { marginTop: 20, justifyContent: 'center' } }}>
      {banners.map((banner, index) => (
        <Stack.Item key={index} styles={{ root: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 5 } }}>
          <Text variant="medium">{banner.message}</Text>
        </Stack.Item>
      ))}
    </Stack>
  );
};

export default PromotionalBanners;
