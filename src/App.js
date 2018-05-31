import React, { Component } from 'react';
import FoodCard from './FoodCard/card.js';
import RangeSlider from './RangeSlider/slider.js';
import { Container } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      moneySliderLevel: 0,
      distanceSliderLevel: 0,
      spicynessSliderLevel: 0,
      currentCategory: '',
    };
  }

  render() {
    return (
      <div>
      <FoodCard />
      <Container textAlign='center'>
        <RangeSlider iconName='dollar' />
        <RangeSlider iconName='map pin' />
        <RangeSlider iconName='fire' />
      </Container>
      </div>
    );
  }
}

export default App;
