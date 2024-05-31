import React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

const Membership: React.FC = () => {
  const handleMembershipSignup = () => {
    // Handle membership signup logic
  };

  return (
    <div>
      <h2>Become a Member</h2>
      <p>Join our membership for $100/year and enjoy exclusive benefits.</p>
      <PrimaryButton onClick={handleMembershipSignup}>Sign Up Now</PrimaryButton>
    </div>
  );
};

export default Membership;
