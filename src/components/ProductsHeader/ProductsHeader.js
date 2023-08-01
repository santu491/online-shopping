import React from 'react';
import './ProductHeader.css';
export const ProductHeader = ({ title }) => {
  return (
    <div class="card-header">
      <p class="left-label">{title}</p>
      <div class="right-label-view">
        <p class="right-label">View all</p>
      </div>
    </div>
  );
};

export default ProductHeader;
