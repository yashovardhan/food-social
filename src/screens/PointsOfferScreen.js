import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/PointsOfferScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class PointsOfferScreen extends Component {
  state = {
    fontLoaded: false,
    name: 'Urban Tadka',
    address: 'Malviya Nagar, Jaipur',
    points: 400,
    background: require('../../assets/images/coupon3.jpg'),
    coupons: [
      {
        content: '25% OFF',
        graphic: 'offer',
        points: 200,
        colour: ['#479FFE', '#67CEF6'],
        key: '1',
        active: true,
      },
      {
        content: 'BUY 1 GET 1',
        graphic: 'free-gift',
        points: 300,
        colour: ['#FF5E97', '#FFA86A'],
        key: '2',
        active: true,
      },
      {
        content: 'FREE GIFT',
        graphic: 'free-gift',
        points: 300,
        colour: ['#71A7F5', '#FF68F8'],
        key: '3',
        active: true,
      },
      {
        content: 'FREE GIFT',
        graphic: 'free-gift',
        points: 300,
        colour: ['#71A7F5', '#FF68F8'],
        key: '4',
        active: false,
      },
    ],
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
          <View style={styles.Main}>
            <View style={styles.BackArea}>
              <Iconset
                name="back"
                color="#FFFFFF"
                size={14}
                style={styles.BackIcon}
                onPress={() => this.props.navigation.navigate('points')}
              />
            </View>
            <View style={styles.HeadingArea}>
              <LinearGradient
                style={styles.HeadingBackground}
                colors={['#2B2E63', '#0F1136']}
                start={[0.25, 1]}
                end={[0.75, 1]}
              />
              <View>
                <Text style={styles.RestaurantName}>{this.state.name}</Text>
                <Text style={styles.RestaurantAddress}>{this.state.address}</Text>
                <View style={styles.CardPoints}>
                  <Text style={styles.CardPointsText}>{this.state.points}</Text>
                  <Text style={[styles.CardPointsText, { fontSize: 13 }]}>Points</Text>
                </View>
              </View>
            </View>
            <View style={styles.MainArea}>
              <FlatList
                data={this.state.coupons}
                style={styles.FlatList}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('redeem')}
                    disabled={!item.active}>
                    <View style={styles.Coupon}>
                      <View style={styles.CouponContent}>
                        <LinearGradient
                          style={styles.CouponBackground}
                          colors={item.active ? item.colour : ['#AFAFAF', '#AFAFAF']}
                          start={[0, 0]}
                          end={[1, 1]}
                        />
                        <Iconset
                          name={item.graphic}
                          color="#FFFFFF"
                          size={60}
                          style={styles.CouponContentGraphic}
                        />
                        <Text style={styles.CouponContentText}>{item.content}</Text>
                      </View>
                      <View style={styles.CouponPoints}>
                        <LinearGradient
                          style={styles.CouponBackground}
                          colors={item.active ? item.colour : ['#AFAFAF', '#AFAFAF']}
                          start={[0, 0]}
                          end={[1, 1]}
                        />
                        <Text style={styles.CouponPointsText}>{item.points}</Text>
                        <Text style={[styles.CouponPointsText, { fontSize: 15 }]}>POINTS</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

export default PointsOfferScreen;
