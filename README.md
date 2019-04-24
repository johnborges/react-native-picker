# react-native-pickr

[![npm version](https://badge.fury.io/js/react-native-pickr.svg)](https://badge.fury.io/js/react-native-pickr)

Renders a native picker component for iOS and Android. On iOS, the picker renders within a transparent `Modal` component fixed at the bottom of the screen. Androind uses the OOB `Picker`.

![ios](http://johnborg.es/assets/dropdown_android.gif "ios picker")
![android](http://johnborg.es/assets/dropdown_ios.gif "android picker")

## Installation

`yarn add react-native-pickr`

## Props

### `options`
Options that will populate the dropdown. Must be an array of strings or integers.

### `selectedOption`
Value matching one of the items in options. Can be a string or an integer.

### `onChange`
Callback for when an item from options is selected. Called with the following parameter:

- itemValue: item that was selected from options

# Usage
```javascript
import React, { Component } from 'react';
import Pickr from 'react-native-pickr';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUsState: 'Vermont',
    }
    this._onChange = this._onChange.bind(this);
  }

  _onChange(value) {
    this.setState({selectedUsState: value});
  }

  render() {
    return (
      <Pickr 
        options={['Vermont', 'Texas', 'New Jersey']} 
        selectedOption={this.state.selectedUsState} 
        onChange={this._onChange}
      />
    );
  }
}
```