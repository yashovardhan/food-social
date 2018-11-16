import React, { Component } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { Card } from 'react-native-elements';

import styles from '../styles/PointsScreenStyle';

class PointsScreen extends Component {
  state = {
    fontLoaded: false,
    notifications: [
      {
        name: 'Urban Tadka',
        points: 400,
        key: '1',
      },
      {
        name: 'Urban Tadka',
        points: 400,
        key: '2',
      },
      {
        name: 'Urban Tadka',
        points: 400,
        key: '3',
      },
      {
        name: 'Urban Tadka',
        points: 400,
        key: '4',
      },
      {
        name: 'Urban Tadka',
        points: 400,
        key: '5',
      },
      {
        name: 'Urban Tadka',
        points: 400,
        key: '6',
      },
    ],
    coins: require('../../assets/icons/coins.png'),
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
            <FlatList
              data={this.state.notifications}
              style={styles.FlatList}
              keyExtractor={item => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('pointsoffer')}>
                  <Card containerStyle={styles.Card} flexDirection="row">
                    <View style={styles.Oval} />
                    <View style={styles.CardIconContainer}>
                      <Image
                        source={this.state.coins}
                        resizeMode="contain"
                        style={styles.CardIcon}
                      />
                    </View>
                    <View style={styles.CardContent}>
                      <Text style={styles.RestaurantNameText}>{item.name}</Text>
                      <View style={styles.CardPoints}>
                        <Text style={styles.CardPointsText}>{item.points}</Text>
                        <Text style={[styles.CardPointsText, { fontSize: 13 }]}>Points</Text>
                      </View>
                    </View>
                  </Card>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

export default PointsScreen;
