// src/pages/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Dropdown, PrimaryButton, Image, Stack } from '@fluentui/react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [customization, setCustomization] = useState<{ dimension: string; color: string; wood: string }>({ dimension: '', color: '', wood: '' });

  useEffect(() => {
    const fetchProduct = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));        
      if (productsData.length > 0) {
        setProduct(productsData);
      } else {
        console.log('No such document!');
      }
    };
    fetchProduct();
  }, [id]);

  const dimensionOptions = [
    { key: '1', text: 'Option 1' },
    { key: '2', text: 'Option 2' },
    // Add more options as needed
  ];
  
  const colorOptions = [
    { key: 'red', text: 'Red' },
    { key: 'blue', text: 'Blue' },
    // Add more options as needed
  ];
  
  const woodOptions = [
    { key: 'oak', text: 'Oak' },
    { key: 'pine', text: 'Pine' },
    // Add more options as needed
  ];
  
  const handleCustomizationChange = (field: string, value: string) => {
    setCustomization(prev => ({ ...prev, [field]: value }));
  };

  const addToCart = () => {
    // Add to cart logic here
  };

  return (
    <div>
      {product && (
        <>
          <h2>{product.name}</h2>
          <Image src={product.photoUrl} alt={product.name} styles={{ root: { width: '100%' } }} />
          <p>{product.description}</p>
          <Stack horizontal>
                <Dropdown 
                placeholder="Select Dimension" 
                options={dimensionOptions} 
                onChange={(e, option) => handleCustomizationChange('dimension', option?.text || '')} 
                />

                <Dropdown 
                placeholder="Select Color" 
                options={colorOptions} 
                onChange={(e, option) => handleCustomizationChange('color', option?.text || '')} 
                />

                <Dropdown 
                placeholder="Select Wood" 
                options={woodOptions} 
                onChange={(e, option) => handleCustomizationChange('wood', option?.text || '')} 
                />

          </Stack>
          <PrimaryButton onClick={addToCart}>Add to Cart</PrimaryButton>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
