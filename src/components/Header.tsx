import React from 'react';
import { Stack } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const items: ICommandBarItemProps[] = [
    { 
      key: 'factoco', 
      onRender: () => (
<div 
          style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: 'white', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center', // Vertical alignment
            justifyContent: 'center', // Horizontal alignment
          }} 
          onClick={() => navigate('/')}
        >
          Factoco
        </div>
      ),
    }, 
    { key: 'living', text: 'Living Room', onClick: () => { navigate('/products?category=living') } },
    { key: 'bedroom', text: 'Bedroom', onClick: () => { navigate('/products?category=bedroom') } },
    { key: 'dining', text: 'Dining Room', onClick: () => { navigate('/products?category=dining') } },
    { key: 'office', text: 'Office', onClick: () => { navigate('/products?category=office') } },
    { key: 'search', text: 'Search', onClick: () => { /* Implement search functionality */ } },
    { key: 'account', text: 'Account', onClick: () => { navigate('/auth') } },
  ];

  const commandBarStyles = {
    root: {
      backgroundColor: '#888',
      width: '100%', // Ensure the CommandBar occupies all available horizontal space
      display: 'flex', // Use flex display to evenly allocate items
      justifyContent: 'space-between', // Evenly allocate items
      maxWidth: 'calc(100% - 20px)'
    },
    primarySet: {
      backgroundColor: '#888',
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: 1, // Allow items to expand to fill remaining space
    },
  };

  return (
    <Stack styles={{ root: { backgroundColor: '#888', color: 'white', fontFamily: 'RHC-Roman', padding: '2px 0' } }}>
      <Stack horizontalAlign="space-between" verticalAlign="center" styles={{ root: { paddingLeft: '20px', paddingRight: '20px' } }}>
        <CommandBar items={items} styles={commandBarStyles} />
      </Stack>
    </Stack>
  );
};

export default Header;
