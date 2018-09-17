import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './sliderStyles.css';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 2000,
      maxSliderValue: 0
    }
    this.updateSlider = this.updateSlider.bind(this);
    this.setMaxSliderValue = this.setMaxSliderValue.bind(this);
  }

  updateSlider(event) {
    this.setState({
      sliderValue: event.target.value
    });
    this.props.updateSliderLevel(event.target.value);
  }

  setMaxSliderValue() {
    let name = this.props.iconName;
    switch(name) {
      case 'dollar':
        this.setState(() => {
          return { maxSliderValue: 200, sliderValue: 100};
        });
        break;
      case 'map pin':
        this.setState(() => {
          return { maxSliderValue: 10000, sliderValue: 5000};
        });
        break;
      case 'fire':
        this.setState(() => {
          return { maxSliderValue: 2000, sliderValue: 1000 };
        });
        break;
      default:
        this.setState(() => {
          return { maxSliderValue: 5000, sliderValue: 2500 };
        });
    }
  }

  componentWillMount() {
    this.setMaxSliderValue()
  }

  render() {
    return (
      <div>
        <Icon size='large' name={this.props.iconName} />
        <input style={{marginTop:'15px'}} type='range' min='1' max={this.state.maxSliderValue} defaultValue={this.state.sliderValue} className='slider' step='1' onChange={this.updateSlider} />
        {this.state.sliderValue}
      </div>
    );
  }
}

export default RangeSlider;