import React from 'react';
import { Link } from 'react-router-dom';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';

const NavigationMenu: React.FC = () => {
  const items: ICommandBarItemProps[] = [
    { key: 'home', text: 'Home', onClick: () => { window.location.href = '/' } },
    { key: 'living', text: 'Living Room', onClick: () => { window.location.href = '/products?category=living' } },
    { key: 'bedroom', text: 'Bedroom', onClick: () => { window.location.href = '/products?category=bedroom' } },
    { key: 'dining', text: 'Dining Room', onClick: () => { window.location.href = '/products?category=dining' } },
    { key: 'office', text: 'Office', onClick: () => { window.location.href = '/products?category=office' } },
    { key: 'search', text: 'Search', onClick: () => { /* Implement search functionality */ } },
    { key: 'account', text: 'Account', onClick: () => { window.location.href = '/auth' } },
  ];

  return (
    <CommandBar items={items} styles={{ root: { justifyContent: 'center', backgroundColor: '#f8f8f8' } }} />
  );
};

export default NavigationMenu;
