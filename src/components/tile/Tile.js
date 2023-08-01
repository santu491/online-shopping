import React from 'react';
import './tile.css';
export const Tile = ({ product }) => {
  return (
    <div class="tile-card">
      <img src={product?.image} alt="productImage" class="image-view" />

      <div class="tile-text-view">
        <p class="tile-label">{product?.title}</p>
        <p class="created-by">By Mars by GHC on Jun 22, 2022</p>
      </div>
    </div>
  );
};

export default Tile;
