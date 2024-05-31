// src/pages/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Dropdown, TextField, Button } from '@fluentui/react';
import { db } from '../firebaseConfig';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [customization, setCustomization] = useState({ dimension: '', color: '', wood: '' });

  useEffect(() => {
    db.collection('products').doc(id).get().then(doc => {
      setProduct(doc.data());
    });
  }, [id]);

  const handleCustomizationChange = (field: string, value: string) => {
    setCustomization(prev => ({ ...prev, [field]: value }));
  };

  const addToCart = () => {
    // Add to cart logic here
  };

  return (
    <Container>
      {product && (
        <>
          <Typography variant="h2">{product.name}</Typography>
          <img src={product.photoUrl} alt={product.name} />
          <Typography variant="body1">{product.description}</Typography>
          <Dropdown placeholder="Select Dimension" onChange={(e, option) => handleCustomizationChange('dimension', option.key.toString())} />
          <Dropdown placeholder="Select Color" onChange={(e, option) => handleCustomizationChange('color', option.key.toString())} />
          <Dropdown placeholder="Select Wood" onChange={(e, option) => handleCustomizationChange('wood', option.key.toString())} />
          <Button onClick={addToCart}>Add to Cart</Button>
        </>
      )}
    </Container>
  );
};

export default ProductDetail;
