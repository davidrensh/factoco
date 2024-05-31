// src/pages/ProductListing.tsx
import React, { useEffect, useState } from 'react';
import { Text, List, Stack } from '@fluentui/react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Text variant="xxLarge">Our Furniture</Text>
      <List>
        {products.map(product => (
          <Stack horizontal key={product.id}>
            <Text variant="large">{product.name}</Text>
            <Text variant="medium">${product.price}</Text>
          </Stack>
        ))}
      </List>
    </div>
  );
};

export default ProductListing;
