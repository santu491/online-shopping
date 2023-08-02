import React from 'react';
import cot from '../assets/img/cot.svg';
import drop from '../assets/img/drop.svg';
import healthIcon from '../assets/img/healthiconsWeight.svg';

export const WellnessOverView = () => {
  return (
    <div class="card-view">
      <div class="row p-3">
        <div class="col-6 text-center">
          <p class="title">Wellness Overview:</p>
          <div class="text-center1">
            <span class="value">40</span>
            <span class="label ">Overweight</span>
          </div>
          <p class="bmi">Your current BMI</p>
        </div>

        <div class="col-6 ">
          <span class="text1">
            <img
              src={healthIcon}
              alt="healthIcon"
              style={{ height: '18px', width: '18px' }}
            />
            <span style={{ paddingLeft: '6px' }}>80.5kgs</span>
          </span>
          <span class="text1">
            <img
              src={cot}
              alt="cot"
              style={{ height: '17px', width: '17px' }}
            />
            <span style={{ paddingLeft: '6px' }}> 7/8 Hours</span>
          </span>
          <span class="text1">
            <img
              src={drop}
              alt="drop"
              style={{ height: '18px', width: '18px' }}
            />
            <span style={{ paddingLeft: '6px' }}> 4/8 Glasses</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WellnessOverView;
