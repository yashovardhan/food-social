import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';

class FeedbackScreen extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'poppins-bold': require('../../assets/fonts/Poppins-Bold.otf'),
      'poppins-light': require('../../assets/fonts/Poppins-Light.otf'),
      'poppins-regular': require('../../assets/fonts/Poppins-Regular.otf'),
      'poppins-medium': require('../../assets/fonts/Poppins-Medium.otf'),
    });
  }

  render() {
    return (
      <View>
        <Text>FeedbackScreen</Text>
        <Text>FeedbackScreen</Text>
        <Text>FeedbackScreen</Text>
        <Text>FeedbackScreen</Text>
        <Text>FeedbackScreen</Text>
        <Text>FeedbackScreen</Text>
      </View>
    );
  }
}

export default FeedbackScreen;