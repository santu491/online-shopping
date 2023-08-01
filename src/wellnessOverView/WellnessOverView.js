import React from 'react';

export const WellnessOverView = () => {
  return (
    <div class="card-view">
      <div class="row ">
        <div class="col-6 text-center">
          <p class="title">Wellness Overview:</p>
          <div class="text-center1">
            <span class="value">40</span>
            <span class="label ">Overweight</span>
          </div>
          <p class="bmi">Your current BMI</p>
        </div>

        <div class="col-6 text-center">
          <p class="text1">80.5kgs</p>
          <p class="text1">7/8 Hours</p>
          <p class="text1"> 4/8 Glasses</p>
        </div>
      </div>
    </div>
  );
};

export default WellnessOverView;
