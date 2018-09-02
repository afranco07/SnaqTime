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
      longitude: 0,
      currentImage: '',
    };

    this.fetchYelpData = this.fetchYelpData.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.setCardImage = this.setCardImage.bind(this);
    this.setDollarAmount = this.setDollarAmount.bind(this);
    this.setDistanceSlider = this.setDistanceSlider.bind(this);
    this.setSpicynessSlider = this.setSpicynessSlider.bind(this);
  }

  fetchYelpData() {
    const yelpURL = 'https://yelpsearch.herokuapp.com/yelp';
    const data = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        radius: 5000
      })
    };
    fetch(yelpURL, data)
      .then(response => response.json())
      .then(jsonBody => {
        let imgArray = jsonBody.businesses.map(business => {
          return business.image_url;
        });
        this.setState(() => {
          return {
            restaurants: imgArray
          };
        });
      })
      .then(() => {
        this.setCardImage();
      })
      .catch(e => console.log(e))
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

  setCardImage() {
    let image_url = this.state.restaurants.pop();
    this.setState(() => {
      return {
        restaurants: this.state.restaurants,
        currentImage: image_url
      };
    });
  }

  setDollarAmount(newAmount) {
    this.setState(() => {
      return { moneySliderLevel: newAmount};
    });
  }

  setDistanceSlider(newDistance) {
    this.setState(() => {
      return { distanceSliderLevel: newDistance };
    });
  }

  setSpicynessSlider(newSpicyness) {
    this.setState(() => {
      return { spicynessSliderLevel: newSpicyness };
    });
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  render() {
    return (
      <div>
        <FoodCard imgLink={this.state.currentImage} changeImg={this.setCardImage}/>
        <Container textAlign='center'>
          <RangeSlider iconName='dollar' updateSliderLevel={this.setDollarAmount}/>
          <RangeSlider iconName='map pin' updateSliderLevel={this.setDistanceSlider}/>
          <RangeSlider iconName='fire' updateSliderLevel={this.setSpicynessSlider}/>
        </Container>
      </div>
    );
  }
}

export default App;
