import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Font, LinearGradient } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/CouponScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class CouponScreen extends Component {
  state = {
    fontLoaded: false,
    gifticon: require('../../assets/icons/gift.jpg'),
  };

  async componentDidMount() {
    await Font.loadAsync({
      'poppins-bold': require('../../assets/fonts/Poppins-Bold.otf'),
      'poppins-light': require('../../assets/fonts/Poppins-Light.otf'),
      'poppins-regular': require('../../assets/fonts/Poppins-Regular.otf'),
      'poppins-medium': require('../../assets/fonts/Poppins-Medium.otf'),
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.Back}>
        {this.state.fontLoaded ? (
          <View style={styles.Back}>
            <StatusBar hidden />
            <View style={styles.BackArea}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Iconset name="back" color="#000000" size={10} style={styles.BackIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.GraphicArea}>
              <Image source={this.state.gifticon} resizeMode="center" style={styles.Graphic} />
            </View>
            <LinearGradient
              colors={['#FF9865', '#FF5F35']}
              style={styles.Coupon}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}>
              <Text style={styles.CouponText}>Coupon Code</Text>
              <Text style={styles.CouponDetails}>ZAP123</Text>
              <Text style={styles.CouponInstructions}>
                Show this Code to the restaurant manager to avail your offer
              </Text>
            </LinearGradient>
          </View>
        ) : null}
      </View>
    );
  }
}

export default CouponScreen;
