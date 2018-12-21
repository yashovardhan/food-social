import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/DetailsScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class DetailsScreen extends Component {
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
            <StatusBar hidden />
            <View style={styles.BackArea}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Iconset name="back" color="#000000" size={10} style={styles.BackIcon} />
              </TouchableOpacity>
            </View>
            <ScrollView
              contentContainerStyle={{ flex: 1, backgroundColor: '#F5F5F5' }}
              style={{ flexGrow: 10 }}>
              <View style={styles.GraphicArea}>
                <Image source={this.state.background} resizeMode="cover" style={styles.Graphic} />
              </View>
              <View style={styles.DetailsArea}>
                <Text style={styles.RestaurantName}>Pizza House</Text>
                <Text style={styles.OfferHeading}>
                  4.7 km away -
                  <Text style={styles.OfferDetails}>
                    &nbsp;Lorem Ipsum is simply dummy text of the is simply dummy text
                  </Text>
                </Text>
                <Text style={[styles.OfferHeading, { color: '#0D9FE6' }]}>Call +91 8947649021</Text>
                <Text style={styles.OfferHeading}>
                  <Text style={{ color: '#4FC15A' }}>Open Now</Text> - 11 AM to 11 PM
                </Text>
                <Text style={styles.OfferHeading}>
                  Food Court - <Text style={styles.OfferDetails}>&nbsp;Pizza</Text>
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity style={styles.MenuButton}>
                    <Text style={styles.MenuButtonText}>MENU</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.MenuButton, { backgroundColor: '#FF5F35' }]}>
                    <Text style={[styles.MenuButtonText, { color: '#FFFFFF' }]}>+ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.DetailsArea, { marginTop: 15 }]}>
                <Text style={styles.OfferHeading}>About Pizza House</Text>
                <Text style={styles.RestaurantDescription}>
                  Lorem Ipsum is simply dummy text of the printing and typ setting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galle
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.NextButton}>
              <Text style={styles.NextButtonText}>+ADD</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

export default DetailsScreen;
