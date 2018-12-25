import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Font } from 'expo';
import { Header, Card } from 'react-native-elements';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/HomeScreenStyle';

var { width } = Dimensions.get('window');

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class HomeScreen extends Component {
  scrollX = new Animated.Value(0);

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
        likes: 14,
      },
      {
        profile_pic: require('../../assets/icons/bh-pic.png'),
        name: 'Biryani House',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '2',
        media: [require('../../assets/images/pic1.jpg')],
        likes: 34,
      },
      {
        profile_pic: require('../../assets/icons/as-pic.png'),
        name: 'Asian Spices',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '3',
        media: [],
        likes: 1,
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
        likes: 12,
      },
      {
        profile_pic: require('../../assets/icons/bh-pic.png'),
        name: 'Biryani House',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '5',
        media: [],
        likes: 3,
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
        likes: 114,
      },
      {
        profile_pic: require('../../assets/icons/ut-pic.png'),
        name: 'Urban Tadka',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '7',
        media: [require('../../assets/images/pic1.jpg'), require('../../assets/images/pic2.jpg')],
        likes: 17,
      },
      {
        profile_pic: require('../../assets/icons/bh-pic.png'),
        name: 'Biryani House',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '8',
        media: [],
        likes: 4,
      },
      {
        profile_pic: require('../../assets/icons/as-pic.png'),
        name: 'Asian Spices',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '9',
        media: [],
        likes: 2,
      },
      {
        profile_pic: require('../../assets/icons/ut-pic.png'),
        name: 'Urban Tadka',
        date: '14 March',
        time: '4:47 PM',
        content: 'Pizza House added 100 points in your Account',
        key: '10',
        media: [require('../../assets/images/pic1.jpg'), require('../../assets/images/pic2.jpg')],
        likes: 19,
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
    let position = Animated.divide(this.scrollX, width);

    return (
      <View style={styles.Back}>
        {this.state.fontLoaded ? (
          <View style={styles.Main}>
            <Header
              leftComponent={<Text style={styles.HeadText}>Feed</Text>}
              rightComponent={
                <Iconset
                  name="noti"
                  color="#000000"
                  size={22}
                  style={{ paddingBottom: 10 }}
                  onPress={() => this.props.navigation.navigate('noti')}
                />
              }
              backgroundColor="#FFFFFF"
            />
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
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    pinchGestureEnabled
                    bounces={false}
                    style={[styles.ImageScroller, { width }]}
                    onScroll={Animated.event([
                      {
                        nativeEvent: { contentOffset: { x: this.scrollX } },
                      },
                    ])}
                    scrollEventThrottle={16}>
                    {item.media.map((source, i) => {
                      return <Image key={i} source={source} style={{ height: width, width }} />;
                    })}
                  </ScrollView>
                  <View style={styles.CardFooter}>
                    <View style={styles.LeftCardFooterComponent}>
                      <TouchableOpacity
                        onPress={() => {
                          item.likes = item.likes + 1;
                        }}>
                        <Iconset name="heart" color="#FF1733" size={18} />
                      </TouchableOpacity>
                      <Text style={styles.LeftCardFooterComponentText}>{item.likes}</Text>
                    </View>
                    {item.media.length > 1 ? (
                      <View style={styles.ScrollDotContainer}>
                        {item.media.map((source, i) => {
                          let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp',
                          });
                          return <Animated.View key={i} style={[styles.ScrollDots, { opacity }]} />;
                        })}
                      </View>
                    ) : null}
                    <View style={styles.RightCardFooterComponent}>
                      <Iconset name="forward" color="#AFAFAF" size={18} />
                    </View>
                  </View>
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
