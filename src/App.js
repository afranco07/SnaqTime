import React, { Component } from 'react';
import FoodCard from './FoodCard/card.js';
import RangeSlider from './RangeSlider/slider.js';
import { Container, Button } from 'semantic-ui-react';
import packageJson from '../package.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurantName: '',
      moneySliderLevel: '1, 2',
      distanceSliderLevel: 0,
      spicynessSliderLevel: 0,
      currentCategory: '',
      latitude: 0,
      longitude: 0,
      currentImage: '',
      isLoading: true
    };

    this.fetchYelpData = this.fetchYelpData.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.setCardImage = this.setCardImage.bind(this);
    this.setDollarAmount = this.setDollarAmount.bind(this);
    this.setDistanceSlider = this.setDistanceSlider.bind(this);
    this.setSpicynessSlider = this.setSpicynessSlider.bind(this);
  }

  fetchYelpData() {
    this.setState(() => {
      return { isLoading: true };
    });
    
    const yelpURL = 'https://yelpsearch.herokuapp.com/yelp';
    const data = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        radius: this.state.distanceSliderLevel,
        price: this.state.moneySliderLevel
      })
    };
    fetch(yelpURL, data)
      .then(response => response.json())
      .then(jsonBody => {
        let imgArray = jsonBody.businesses.map(business => {
          return {
            image_url: business.image_url,
            name: business.name
          };
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
    let restaurant_object = this.state.restaurants.pop();
    let { image_url, name } = restaurant_object;
    this.setState(() => {
      return {
        restaurants: this.state.restaurants,
        currentImage: image_url,
        restaurantName: name,
        isLoading: false
      };
    });
  }

  setDollarAmount(newAmount) {
    let priceArray = [];
    for (let i = 1; i <= newAmount; i++) {
      priceArray.push(i);
    }
    let priceString = priceArray.join(", ");
    this.setState(() => {
      return { moneySliderLevel: priceString };
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
        <FoodCard imgLink={this.state.currentImage} changeImg={this.setCardImage} currentRestaurantName={this.state.restaurantName} />
        <Container textAlign='center'>
          <RangeSlider iconName='dollar' updateSliderLevel={this.setDollarAmount} maxSliderValue={4} defaultSliderValue={2}/>
          <RangeSlider iconName='map pin' updateSliderLevel={this.setDistanceSlider} maxSliderValue={10000} defaultSliderValue={5000}/>
          <RangeSlider iconName='fire' updateSliderLevel={this.setSpicynessSlider} maxSliderValue={2000} defaultSliderValue={1000}/>
          <Button color="green" onClick={this.fetchYelpData} loading={this.state.isLoading} disabled={this.state.isLoading}>Update</Button><br></br>
          <a href="https://github.com/afranco07/SnaqTime" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.65em" }}>Source Code</a>
          <p style={{ fontSize: "0.5em" }}>v{packageJson.version}</p>
        </Container>
      </div>
    );
  }
}

export default App;
