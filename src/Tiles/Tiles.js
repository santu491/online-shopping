import React from 'react';
import ProductHeader from '../components/ProductsHeader/ProductsHeader';
import Tile from '../components/tile/Tile';
import './tiles.css';
export const Tiles = ({ products }) => {
  console.log('product...', products);
  return (
    <div>
      <ProductHeader title={products?.headerTitle} />
      <div class="products-view">
        {products?.data.map((product, index) => {
          return (
            <div key={index}>
              <Tile product={product} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tiles;
