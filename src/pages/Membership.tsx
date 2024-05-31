// src/pages/Membership.tsx
import React from 'react';
import { Container, Button } from '@fluentui/react';
import { auth } from '../firebaseConfig';

const Membership: React.FC = () => {
  const handleMembershipSignup = () => {
    // Handle membership signup logic
  };

  return (
    <Container>
      <Typography variant="h2">Become a Member</Typography>
      <Typography variant="body1">Join our membership for $100/year and enjoy exclusive benefits.</Typography>
      <Button onClick={handleMembershipSignup}>Sign Up Now</Button>
    </Container>
  );
};

export default Membership;
