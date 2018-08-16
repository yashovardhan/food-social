import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';

class NotificationScreen extends Component {
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
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
      </View>
    );
  }
}

export default NotificationScreen;
