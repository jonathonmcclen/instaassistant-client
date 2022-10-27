import React, { useState } from 'react';
import 'globals/global-classes.css';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import BackgroundAnimation from 'components/Background/BackgroundAnimation';

function App() {
  const [menuItemHovered, setMenuItemHovered] = useState('');

  // const animateLogo = (name) => {
  //   if (name === 'Billing') {
  //     setMenuSeleted('Billing');
  //   } else if (name === 'Profile') {
  //     setMenuSeleted('Profile');
  //   } else if (name === 'Accounts') {
  //     setMenuSeleted('Accounts');
  //   } else {
  //     setMenuSeleted('');
  //   }
  // };

  return (
    <div className="App">
        <div className="app">
          <Header />
          <Menu
            menuItemHovered={menuItemHovered}
            setMenuItemHovered={setMenuItemHovered}
          />

          <Outlet />
          <BackgroundAnimation />
        </div>
    </div>
  );
}

export default App;
