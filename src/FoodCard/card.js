import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import Hammer from 'react-hammerjs';
import './card.css';

class FoodCard extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      leftPosition: 0,
      topPosition: 0
    };
    this.handlePan = this.handlePan.bind(this);
    this.handlePanStop = this.handlePanStop.bind(this);
  }

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

  handlePanStop(event) {
    this.setState(() => {
      return {
        leftPosition: 0,
        topPosition: 0
      };
    });
  }

  render() {
    return (
      <Hammer 
        style={{position: 'relative', left: this.state.leftPosition, top: this.state.topPosition }} 
        onSwipeRight={this.props.changeImg}
        onSwipeLeft={this.props.changeImg}
        onPan={this.handlePan} 
        onPanEnd={this.handlePanStop}
      >
        <div>
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
                    <Icon link size='huge' color='green' name='checkmark' onClick={this.props.changeImg} />
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
