import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

class FoodCard extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
    };
  }

  render() {
    return (
      <Card style={{marginTop: '10px'}} centered>
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
    );
  }
}

export default FoodCard;