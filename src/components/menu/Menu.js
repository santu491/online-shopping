import React from 'react';
import './menu.css';

export const Menu = ({ item }) => {
  return (
    <div class="menu">
      <ul>
        {item.data.map((product, index) => {
          return (
            <li
              key={index}
              style={{
                textAlign: 'center',
                border: `1px solid ${product.backgroundColor}`,
                backgroundColor: product.backgroundColor
              }}
            >
              <img src={product.image} alt="image1" class="menu-image" />
              <p class="title">{product.title?.toUpperCase()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
