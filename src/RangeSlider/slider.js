import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './sliderStyles.css';

/**
 * Props:
 * maxSliderValue: The max possible range for slider
 * defaultSliderValue: The default value when slider is rendered
 * 
 * State:
 * sliderValue: The current value of the slider
 * 
 * Functions:
 * updateSlider(event): Updates the sliderValue state to the current value of the slider
 */

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: props.defaultSliderValue
    }
    this.updateSlider = this.updateSlider.bind(this);
  }

  updateSlider(event) {
    this.setState({
      sliderValue: event.target.value
    });
    this.props.updateSliderLevel(event.target.value);
  }

  render() {
    return (
      <div>
        <Icon size='large' name={this.props.iconName} />
        <input style={{marginTop:'15px'}} type='range' min='1' max={this.props.maxSliderValue} 
          defaultValue={this.props.defaultSliderValue} className='slider' step='1' onChange={this.updateSlider} />
        { process.env.NODE_ENV ? this.state.sliderValue : null }
      </div>
    );
  }
}

export default RangeSlider;