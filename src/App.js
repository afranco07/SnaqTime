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
      latitude: 0,
      longitude: 0
    };

    this.fetchYelpData = this.fetchYelpData.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  fetchYelpData() {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?latitude=${this.state.latitude}&longitude=${this.state.longitude}&radius=500`;
    const requestBody = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
      }
    };
    fetch(yelpURL, requestBody)
      .then(response => {
        console.log('here');
        return response.json();
      })
      .then(jsonBody => {
        console.log(jsonBody);
      });
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      this.fetchYelpData();
    });
  }

  componentDidMount() {
    this.getCurrentLocation();
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
