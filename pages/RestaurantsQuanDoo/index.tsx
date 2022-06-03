
import * as React from 'react';
import RestaurantGuide from './components/RestaurantGuide';
import SildeFind from './components/SlideFind/component';

export interface IRestaurantsProps {
}

export default function Restaurants (props: IRestaurantsProps) {
  return (
    <div>
          <SildeFind/>
          <RestaurantGuide/>
    </div>
  );
}
