import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

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
        <Card.Content extra textAlign='right'>
          <Grid columns='equal' divided>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Icon link size='huge' color='red' name='remove' />
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <Icon link size='huge' color='green' name='checkmark'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default FoodCard;