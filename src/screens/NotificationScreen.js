import React, { Component } from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import { Header } from 'react-native-elements';

import styles from '../styles/NotificationScreenStyle';

class NotificationScreen extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'poppins-bold': require('../../assets/fonts/Poppins-Bold.otf'),
      'poppins-light': require('../../assets/fonts/Poppins-Light.otf'),
      'poppins-regular': require('../../assets/fonts/Poppins-Regular.otf'),
      'poppins-medium': require('../../assets/fonts/Poppins-Medium.otf'),
    });

    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    return (
      <View style={styles.Back}>
        {this.state.fontLoaded ? (
          <View style={styles.Back}>
            <Header
              centerComponent={{ text: 'Notifications', style: styles.HeaderText }}
              backgroundColor="#FFFFFF"
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default NotificationScreen;
