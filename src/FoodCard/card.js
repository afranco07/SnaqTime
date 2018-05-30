import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  }

  render() {
    return (
      <Card centered>
        <Image src="https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg" />
        <Card.Content>
          <Card.Header></Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content></Card.Content>
      </Card>
    );
  }
}

export default FoodCard;