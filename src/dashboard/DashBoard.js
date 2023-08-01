import React from 'react';
import Menu from '../components/menu/Menu';
import { hairCareProducts } from '../data/hairCareProducts';
import { productInfo } from '../data/productsInfo';
import Products from '../products/Products';
import Tiles from '../Tiles/Tiles';
import WellnessOverView from '../wellnessOverView/WellnessOverView';
import './dashBoard.css';

export const DashBoard = () => {
  return (
    <div className="container">
      <Menu logo={require('../assets/img/blog.png')} title={'track'} />
      <WellnessOverView />
      <div style={{ marginTop: '12px' }}>
        <div class="row">
          <div class="tile1 col-6">
            <p class="title">Over Skin Score:</p>
            <div class="row1">
              <span class="value">40</span>
              <div style={{ marginLeft: '14px' }}>
                <p class="small-label">5 weeks</p>
                <p class="small-label">20 uploads</p>
              </div>
            </div>
            <p class="small-label">Week: 40/45</p>
          </div>

          <div class="tile2 col-6">
            <p class="title">Hair Tracker:</p>
            <div class="row1">
              <span class="value">40</span>
              <div style={{ marginLeft: '14px' }}>
                <p class="small-label">5 weeks</p>
                <p class="small-label">20 uploads</p>
              </div>
            </div>
            <p class="small-label">Week: 40/45</p>
          </div>
        </div>
      </div>

      <div class="tracker">
        <p class="tracker-text"> View all trackers</p>
      </div>
      <div></div>

      <Products products={productInfo} />
      <Tiles products={hairCareProducts} />
      <Products products={productInfo} />
      <Tiles products={hairCareProducts} />
    </div>
  );
};

export default DashBoard;
