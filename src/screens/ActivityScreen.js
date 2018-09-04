import React, { Component } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';
import { Header, Card } from 'react-native-elements';

import styles from '../styles/ActivityScreenStyle';

class ActivityScreen extends Component {
  state = {
    fontLoaded: false,
    notifications: [
      {
        name: 'Urban Tadka',
        profile_pic: require('../../assets/icons/ut-pic.png'),
        background: require('../../assets/images/coupon1.jpg'),
        expiry_date: '14 March 2017',
        content: '25% off on any dish',
        type: '25% OFF',
        key: '1',
        colors: ['#FC5C7E', '#566DF7'],
      },
      {
        name: 'Asian Spices',
        profile_pic: require('../../assets/icons/as-pic.png'),
        background: require('../../assets/images/coupon2.jpg'),
        expiry_date: '14 March 2017',
        content: 'Buy Paneer Handi and Get Mohito free',
        type: 'BUY 1 GET 1',
        key: '2',
        colors: ['#6085F7', '#6DD5FA'],
      },
      {
        name: 'Pizza House',
        profile_pic: require('../../assets/icons/ph-pic.png'),
        background: require('../../assets/images/coupon3.jpg'),
        expiry_date: '14 March 2017',
        content: 'Get Free Pizza',
        type: 'FREE GIFT',
        key: '3',
        colors: ['#CCFFB5', '#AAA40B'],
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
              centerComponent={{ text: 'Activity', style: styles.HeaderText }}
              backgroundColor="#FFFFFF"
            />
            <FlatList
              data={this.state.notifications}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('offer')}>
                  <Card containerStyle={styles.Card}>
                    <View style={styles.CardHeader}>
                      <View style={styles.CardHeaderContainer}>
                        <Image
                          style={styles.CardProfilePic}
                          resizeMode="contain"
                          source={item.profile_pic}
                        />
                        <View style={styles.CardContent}>
                          <Text style={styles.CardHeading}>{item.name}</Text>
                          <Text style={styles.CardExpiryDate}>Valid Until: {item.expiry_date}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.CardBody}>
                      <LinearGradient
                        colors={item.colors}
                        style={styles.CardBodyGradient}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}>
                        <Image
                          style={styles.CardBackgroundImage}
                          resizeMode="cover"
                          source={item.background}
                        />
                        <View style={styles.CardBodyContainer}>
                          <Text style={styles.CardBodyHeading}>{item.type}</Text>
                          <View style={styles.CardBodySeparator} />
                          <Text style={styles.CardBodyContent}>{item.content}</Text>
                        </View>
                      </LinearGradient>
                    </View>
                  </Card>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.key}
            />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

export default ActivityScreen;
