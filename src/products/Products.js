import React from 'react';
import Product from '../components/Product/Product';
import ProductHeader from '../components/ProductsHeader/ProductsHeader';
import './products.css';
export const Products = ({ products }) => {
  return (
    <div>
      <ProductHeader title={products?.headerTitle} />
      <div class="products-view">
        {products?.data.map((product, index) => {
          return (
            <div key={index}>
              <Product product={product} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
