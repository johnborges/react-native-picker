import React, { Component } from 'react'
import { 
  Modal,
  StyleSheet,
  View, Text, Button,
  PickerIOS, Picker,
  TouchableWithoutFeedback,
  SafeAreaView,
  Platform,
} from 'react-native'

export default class Pickr extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }

    this._toggleModal = this._toggleModal.bind(this);
  }

  _toggleModal() {
    this.setState((state, props) => ({ visible: !state.visible }));
  }

  render() {
    const { options, selectedOption, onChange } = this.props;

    if (Platform.OS === 'ios') {
      return (
        <View>
          <TouchableWithoutFeedback onPress={this._toggleModal}>
            <Text>{selectedOption}</Text>
          </TouchableWithoutFeedback>
          <Modal animationType="fade" transparent={true} visible={this.state.visible}>
            <SafeAreaView style={styles.modalContainer}>
              <View style={styles.modal}>
                <View style={styles.doneBtnContainer}><Button title="Done" onPress={this._toggleModal} /></View>
                <PickerIOS selectedValue={selectedOption} onValueChange={(value) => onChange(value)} >
                  {options.map((item, index) => {
                    return (<PickerIOS.Item key={index} label={item.label} value={item.value}/>)
                  })}
                </PickerIOS>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      )
    }
    else if (Platform.OS === 'android') {
      return (
        <Picker 
          selectedValue={selectedOption}
          onValueChange={(value) => onChange(value)}>
          {options.map((item, index) => {
            return (<Picker.Item key={index} label={item.label} value={item.value}/>)
          })}
        </Picker>
      )
    }
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
  doneBtnContainer: {
    alignSelf: 'flex-end',
    width: 75,
  }
});

