import React, { Component } from 'react'
import { Modal, StyleSheet, View, Text, Button, PickerIOS, TouchableWithoutFeedback } from 'react-native'
//import PropTypes from 'prop-types';

export default class Pickr extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selectedIndex: 0,
      selectedValue: 'New Jersey'
    }

    this._toggleModal = this._toggleModal.bind(this);
  }

  _toggleModal() {
    this.setState((state, props) => ({ visible: !state.visible }));
  }

  render() {
    const { options } = this.props;
    console.log(this.state)
    return (
      <View>
        <TouchableWithoutFeedback onPress={this._toggleModal}>
          <Text>{this.state.selectedValue}</Text>
        </TouchableWithoutFeedback>
        <Modal animationType="fade" transparent={true} visible={this.state.visible}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Button style={styles.doneBtn} title="Done" onPress={this._toggleModal} />
              <PickerIOS selectedValue={this.state.selectedValue} onValueChange={(value, position) => {this.setState({selectedIndex: position, selectedValue: value})}}>
                {options.map((item, index) => {
                  return (<PickerIOS.Item key={index} label={item} value={item}/>)
                })}
              </PickerIOS>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(100,100,100, 0.5)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#E5E4E2',
  },
  doneBtn: {
    alignSelf: 'flex-start'
  }
});

