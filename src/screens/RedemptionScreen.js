import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/RedemptionScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class RedemptionScreen extends Component {
  state = {
    fontLoaded: false,
    content: '25% OFF',
    graphic: 'offer',
    points: 200,
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
        <Text style={styles.TnCLines}>{'\u2022'}</Text>
        <Text style={[styles.TnCLines, { flex: 1, paddingLeft: 5 }]}>{data}</Text>
      </View>
    );
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
                onPress={() => this.props.navigation.goBack()}
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
                <View style={styles.Offer}>
                  <Iconset
                    name={this.state.graphic}
                    color="#FFFFFF"
                    size={35}
                    style={styles.OfferGraphic}
                  />
                  <Text style={styles.OfferText}>{this.state.content}</Text>
                </View>
                <View style={styles.Points}>
                  <Text style={styles.PointsText}>{this.state.points}</Text>
                  <Text style={[styles.PointsText, { fontSize: 18 }]}>POINTS</Text>
                </View>
              </View>
            </View>
            <View style={styles.MainArea}>
              <Text style={styles.TnC}>T & C</Text>
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
              {this.unorderedList('Lorem Ipsum is simply dummy text of the')}
            </View>
            <TouchableOpacity
              style={styles.SubmitButton}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.SubmitButtonText}>APPLY</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

export default RedemptionScreen;
