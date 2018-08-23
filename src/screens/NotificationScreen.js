import React, { Component } from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import { Header } from 'react-native-elements';

import styles from '../styles/NotificationScreenStyle';

class NotificationScreen extends Component {
  state = {
    fontLoaded: false,
    notifications: [
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '1',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '2',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '3',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '4',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '5',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '6',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '7',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '8',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '9',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '10',
      },
    ],
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
