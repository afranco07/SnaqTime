import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 2000,
    }
    this.updateSlider = this.updateSlider.bind(this);
  }

  updateSlider(event) {
    this.setState({
      sliderValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Icon size='large' name={this.props.iconName} />
        <input style={{marginTop:'10px'}} type='range' min='1' max='4000' defaultValue={this.state.sliderValue} className='slider' step='1' onChange={this.updateSlider} />
        {this.state.sliderValue}
      </div>
    );
  }
}

export default RangeSlider;