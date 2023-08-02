import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div style={{ marginTop: '20px', paddingRight: 17 }}>
      <div class="card">
        <img
          src={product.image}
          alt="productImage"
          style={{ marginTop: '10px' }}
        />
        <div style={{ margin: '13px' }}>
          <p class="title">{product.title}</p>
          <p class="rating">
            <span className="star">&#9733;</span>{' '}
            <span className="star">&#9733;</span>{' '}
            <span className="star">&#9733;</span>{' '}
            <span className="star">&#9733;</span>{' '}
            <span className="star">&#9733;</span> ({product.rating})
          </p>
          <p>
            <span class="final-price">Rs. {product.finalPrice}</span>
            <span class="text-strike">Rs. {product.actualPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
