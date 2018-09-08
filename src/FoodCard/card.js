import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import Hammer from 'react-hammerjs';
import RestaurantModal from '../RestaurantModal/restaurantModal.js';
import SwipedModal from '../RestaurantModal/swipedModal.js';
import './card.css';

class FoodCard extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      leftPosition: 0,
      topPosition: 0,
      modalSwipe: false
    };
    this.handlePan = this.handlePan.bind(this);
    this.handlePanStop = this.handlePanStop.bind(this);
    this.handleSwipeRight = this.handleSwipeRight.bind(this);
    this.handleSwipeModalClose = this.handleSwipeModalClose.bind(this);
  }

  // Sets the card position to right under
  // the mouse or finger (on touch devices)
  handlePan(event) {
    let newXcoord = event.deltaX;
    let newYcoord = event.deltaY;
    this.setState(() => {
      return {
        leftPosition: newXcoord,
        topPosition: newYcoord
      };
    });
  }

  // Returns card to original position 
  // after panning is stopped
  handlePanStop(event) {
    this.setState(() => {
      return {
        leftPosition: 0,
        topPosition: 0
      };
    });
  }

  // Used to activate the modal when
  // a right swipe is detected
  handleSwipeRight(event) {
    this.setState(() => {
      return { modalSwipe: !this.state.modalSwipe };
    });
  }

  // Method passed SwipedModal that handles the
  // closing and changing of current FoodCard
  handleSwipeModalClose() {
    this.props.changeImg();
    this.handleSwipeRight();
  }

  render() {
    return (
      <Hammer 
        style={{position: 'relative', left: this.state.leftPosition, top: this.state.topPosition }} 
        onSwipeRight={this.handleSwipeRight}
        onSwipeLeft={this.props.changeImg}
        onPan={this.handlePan} 
        onPanEnd={this.handlePanStop}
      >
        <div>
          <SwipedModal name={this.props.currentRestaurantName} open={this.state.modalSwipe} closeModal={this.handleSwipeModalClose} />
          <Card style={{marginTop: '10px'}} centered raised={true}>
            <Image src={this.props.imgLink} />
            <Card.Content>
              <Card.Header></Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description></Card.Description>
            </Card.Content>
            <Card.Content extra textAlign='right'>
              <Grid columns='equal' divided>
                <Grid.Row>
                  <Grid.Column textAlign='center'>
                    <Icon link size='huge' color='red' name='remove' onClick={this.props.changeImg} />
                  </Grid.Column>
                  <Grid.Column textAlign='center'>
                    <RestaurantModal changeImg={this.props.changeImg} name={this.props.currentRestaurantName} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </div>
      </Hammer>
    );
  }
}

export default FoodCard;
