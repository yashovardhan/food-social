import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Font } from 'expo';
import { Card } from 'react-native-elements';

import styles from '../styles/HomeScreenStyle';

class HomeScreen extends Component {
  state = {
    fontLoaded: false,
    profile_pic: '',
    notifications: [
      {
        profile_pic: require('../../assets/icons/ut-pic.png'),
        name: 'Urban Tadka',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '1',
        media: [require('../../assets/images/pic1.jpg'), require('../../assets/images/pic2.jpg')],
      },
      {
        profile_pic: require('../../assets/icons/bh-pic.png'),
        name: 'Biryani House',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '2',
        media: [require('../../assets/images/pic1.jpg')],
      },
      {
        profile_pic: require('../../assets/icons/as-pic.png'),
        name: 'Asian Spices',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '3',
        media: [],
      },
      {
        profile_pic: require('../../assets/icons/ut-pic.png'),
        name: 'Urban Tadka',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '4',
        media: [
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
        ],
      },
      {
        profile_pic: require('../../assets/icons/bh-pic.png'),
        name: 'Biryani House',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '5',
      },
      {
        profile_pic: require('../../assets/icons/as-pic.png'),
        name: 'Asian Spices',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '6',
        media: [
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
          require('../../assets/images/pic1.jpg'),
          require('../../assets/images/pic2.jpg'),
        ],
      },
      {
        profile_pic: require('../../assets/icons/ut-pic.png'),
        name: 'Urban Tadka',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '7',
        media: [require('../../assets/images/pic1.jpg'), require('../../assets/images/pic2.jpg')],
      },
      {
        profile_pic: require('../../assets/icons/bh-pic.png'),
        name: 'Biryani House',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '8',
        media: [],
      },
      {
        profile_pic: require('../../assets/icons/as-pic.png'),
        name: 'Asian Spices',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '9',
      },
      {
        profile_pic: require('../../assets/icons/ut-pic.png'),
        name: 'Urban Tadka',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '10',
        media: [require('../../assets/images/pic1.jpg'), require('../../assets/images/pic2.jpg')],
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
          <View style={styles.Main}>
            <FlatList
              data={this.state.notifications}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <Card containerStyle={styles.Card}>
                  <View style={styles.CardHeader}>
                    <Image
                      style={styles.HeaderImage}
                      resizeMode="contain"
                      source={item.profile_pic}
                    />
                    <View style={styles.HeaderText}>
                      <Text style={styles.CardTitle}>{item.name}</Text>
                      <Text style={styles.CardTime}>
                        {item.date} at {item.time}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.CardContent}>
                    <Text style={styles.CardContentHeading}>LOREM IPSUM IS SIMPLY</Text>
                    <Text style={styles.CardContentText}>
                      Lorem Ipsum has been the industrys standard dummygr do text ever since the
                      1500s, when an unknown printer took a ok of type
                    </Text>
                  </View>
                  {item.media ? (
                    <View>
                      <Text>Image</Text>
                    </View>
                  ) : null}
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

export default HomeScreen;
