import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Font } from 'expo';
import { Header, Card } from 'react-native-elements';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/FeedbackScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class FeedbackScreen extends Component {
  state = {
    fontLoaded: false,
    orders: [
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '1',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '2',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '3',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '4',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '5',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '6',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '7',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '8',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
        key: '9',
      },
      {
        profile_pic: require('../../assets/icons/ph-pic.png'),
        date: '11 March',
        time: '6:24 PM',
        content: 'Pizza House',
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
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });

    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    return (
      <View style={styles.Back}>
        {this.state.fontLoaded ? (
          <View style={styles.Main}>
            <Header
              centerComponent={{ text: 'Feedback', style: styles.HeaderText }}
              backgroundColor="#FFFFFF"
            />
            <FlatList
              data={this.state.orders}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <Card flexDirection="row" containerStyle={styles.Card}>
                  <Image style={styles.CardImage} resizeMode="contain" source={item.profile_pic} />
                  <View style={styles.CardContent}>
                    <Text style={styles.CardHeading}>{item.content}</Text>
                    <Text style={styles.CardTime}>
                      {item.date}, {item.time}
                    </Text>
                  </View>
                  <Iconset name="feedback" color="#000000" size={22} style={styles.FeedbackIcon} />
                </Card>
              )}
              keyExtractor={item => item.key}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default FeedbackScreen;
