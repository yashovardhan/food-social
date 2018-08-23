import React, { Component } from 'react';
import { View, Text, Image, FlatList, SafeAreaView } from 'react-native';
import { Font } from 'expo';
import { Header, Card } from 'react-native-elements';

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
      <SafeAreaView style={styles.Back}>
        {this.state.fontLoaded ? (
          <View style={styles.Main}>
            <Header
              centerComponent={{ text: 'Notifications', style: styles.HeaderText }}
              backgroundColor="#FFFFFF"
            />
            <FlatList
              data={this.state.notifications}
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
                </Card>
              )}
              keyExtractor={item => item.key}
            />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

export default NotificationScreen;
