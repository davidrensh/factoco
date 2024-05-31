// src/pages/ProductListing.tsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem } from '@fluentui/react';
import { db } from '../firebaseConfig';

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products').get().then(snapshot => {
      const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h2">Our Furniture</Typography>
      <List>
        {products.map(product => (
          <ListItem key={product.id}>{product.name}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProductListing;
