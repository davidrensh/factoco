import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CommandBar, ICommandBarItemProps, ICommandBarStyles } from '@fluentui/react';

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();

  const items: ICommandBarItemProps[] = [
    { key: 'home', text: 'Home', onClick: () => { navigate('/') } },
    { key: 'living', text: 'Living Room', onClick: () => { navigate('/products?category=living') } },
    { key: 'bedroom', text: 'Bedroom', onClick: () => { navigate('/products?category=bedroom') } },
    { key: 'dining', text: 'Dining Room', onClick: () => { navigate('/products?category=dining') } },
    { key: 'office', text: 'Office', onClick: () => { navigate('/products?category=office') } },
    { key: 'search', text: 'Search', onClick: () => { /* Implement search functionality */ } },
    { key: 'account', text: 'Account', onClick: () => { navigate('/auth') } },
  ];

  const commandBarStyles: ICommandBarStyles = {
    root: {
      backgroundColor: '#333',
      width: '100%', // Ensure the CommandBar occupies all available horizontal space
    },
    primarySet: {
      selectors: {
        '.ms-CommandBarItem': {
          color: '#fff',
        },
      },
    },
  };

  return (
    <CommandBar items={items} styles={commandBarStyles} />
  );
};

export default NavigationMenu;
