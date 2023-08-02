import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
// import { BiUser, CiSearch, GoGoal, GoHome } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { GoGoal, GoHome } from 'react-icons/go';
import fire from '../assets/img/fire.svg';
import galley from '../assets/img/gallery.svg';
import VectorSVG from '../assets/img/Vector.svg';
import Menu from '../components/menu/Menu';
import { hairCareProducts } from '../data/hairCareProducts';
import { hairproductInfo } from '../data/hairProductInfo';
import { menuProducts } from '../data/menuProducts';
import { productInfo } from '../data/productsInfo';
import { skinproductInfo } from '../data/skinproductInfo';
import { skintalkProducts } from '../data/skinTalkproductInfo';
import Products from '../products/Products';
import Tiles from '../Tiles/Tiles';
import WellnessOverView from '../wellnessOverView/WellnessOverView';
import './dashBoard.css';

export const DashBoard = () => {
  return (
    <div className="container">
      <div class="header">
        <CgMenuGridO size={24} color="" />
        <img
          src={require('../assets/img/brandlogo.png')}
          alt="brandLogo"
          style={{
            width: '113px'
          }}
        />
        <BsCart3 size={24} color="#B5B5B5" />
      </div>
      <p class="heading">
        Welcome, <span style={{ fontWeight: '500' }}>June!</span>
      </p>
      <Menu item={menuProducts} />
      <WellnessOverView />
      <div style={{ marginTop: '12px' }}>
        <div class="tile-container">
          <div class="tile1 ">
            <p class="title">Over Skin Score:</p>
            <div class="row1">
              <span class="value">45</span>

              <div
                style={{
                  marginLeft: '14px'
                }}
              >
                <span class="small-label">
                  <img src={fire} alt="fire" />
                  <span style={{ paddingLeft: '5px' }}>5 weeks</span>
                </span>

                <div class="small-label pt-1">
                  <img src={galley} alt="galley" />
                  <span> 20 uploads</span>
                </div>
              </div>
            </div>
            <progress id="file" max="100" value="40" class="colored">
              40%
            </progress>
            <p class="small-label">Week: 40/45</p>
          </div>

          <div class="tile2 ">
            <p class="title">Hair Tracker:</p>
            <div class="row1">
              <span class="value">45</span>
              <div
                style={{
                  marginLeft: '14px'
                }}
              >
                <span class="small-label">
                  <img src={fire} alt="fire" />
                  <span style={{ paddingLeft: '5px' }}>5 weeks</span>
                </span>

                <div class="small-label pt-1">
                  <img src={galley} alt="galley" />
                  <span> 20 uploads</span>
                </div>
              </div>
            </div>
            <progress id="file" max="100" value="40" class="colored">
              40%
            </progress>
            <p class="small-label">Week: 40/45</p>
          </div>
        </div>
      </div>

      <div class="tracker">
        <p class="tracker-text"> View all trackers</p>
        <img
          // src={require('../assets/img/rightArrow.png')}
          src={VectorSVG}
          alt="rightArrow"
          style={{ height: '13px', width: '8px' }}
        />
      </div>
      <div></div>

      <Products products={productInfo} />
      <Products products={hairproductInfo} />
      <Tiles products={hairCareProducts} />
      <Products products={skinproductInfo} />
      <Tiles products={skintalkProducts} />
      <div class="tracker">
        <p class="tracker-text"> Join our 10K family on Instagram</p>
        <img
          src={VectorSVG}
          alt="rightArrow"
          style={{ height: '13px', width: '8px' }}
        />
      </div>

      <div class="footer">
        <div class="footer-view">
          <GoHome size={24} color={'#333333'} />
          <p class="footer-label ">Home</p>
        </div>
        <div class="footer-view">
          <GoGoal size={24} color={'#B5B5B5'} />
          <p class="footer-label footer-color ">Track</p>
        </div>
        <div class="footer-view">
          <CiSearch size={24} color={'#B5B5B5'} />
          <p class="footer-label footer-color ">Search</p>
        </div>
        <div class="footer-view">
          <BiUser size={24} color={'#B5B5B5'} />
          <p class="footer-label footer-color ">Account</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
