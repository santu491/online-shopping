import React from 'react';
import './menu.css';

export const Menu = ({ logo, title }) => {
  return (
    <div class="menu">

      <img src={logo} alt="image1"  class='menu-image' />
   
      <p>{title?.toUpperCase()}</p>

    </div>
  );
};

export default Menu;
