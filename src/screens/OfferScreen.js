import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/OfferScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class OfferScreen extends Component {
  state = {
    fontLoaded: false,
    name: 'Pizza House',
    background: require('../../assets/images/coupon3.jpg'),
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

  unorderedList(data) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.OfferDetails}>{'\u2022'}</Text>
        <Text style={[styles.OfferDetails, { flex: 1, paddingLeft: 5 }]}>{data}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.Back}>
        {this.state.fontLoaded ? (
          <View style={styles.Back}>
            <View style={styles.BackArea}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Iconset name="back" color="#000000" size={10} style={styles.BackIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.GraphicArea}>
              <Image source={this.state.background} resizeMode="cover" style={styles.Graphic} />
            </View>
            <View style={styles.DetailsArea}>
              <Text style={styles.RestaurantName}>Pizza House</Text>
              <Text style={[styles.OfferHeading, { color: '#75B72C' }]}>Offer</Text>
              <Text style={styles.OfferType}>
                Free Gift:
                <Text style={styles.OfferDetails}> Get free pizza</Text>
              </Text>
              <Text style={styles.OfferHeading}>T & C</Text>
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
            </View>
            <TouchableOpacity
              style={styles.NextButton}
              onPress={() => this.props.navigation.navigate('coupon')}>
              <Text style={styles.NextButtonText}>USE ME NOW</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

export default OfferScreen;
