import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/SearchScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class SearchScreen extends Component {
  state = {
    fontLoaded: false,
    restaurants: [
      {
        name: 'Asian Darbar',
        address: 'Four square building malviya nagar',
        cuisine: 'Rajasthani, Asian, North indian',
        profile: require('../../assets/images/search-profile.jpg'),
        key: '1',
      },
      {
        name: 'Asian Darbar',
        address: 'Four square building malviya nagar',
        cuisine: 'Rajasthani, Asian, North indian',
        profile: require('../../assets/images/search-profile.jpg'),
        key: '2',
      },
      {
        name: 'Asian Darbar',
        address: 'Four square building malviya nagar',
        cuisine: 'Rajasthani, Asian, North indian',
        profile: require('../../assets/images/search-profile.jpg'),
        key: '3',
      },
      {
        name: 'Asian Darbar',
        address: 'Four square building malviya nagar',
        cuisine: 'Rajasthani, Asian, North indian',
        profile: require('../../assets/images/search-profile.jpg'),
        key: '4',
      },
    ],
    background: require('../../assets/images/search-background.jpg'),
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
            <View style={styles.GraphicArea}>
              <Image source={this.state.background} resizeMode="cover" style={styles.Graphic} />
              <Text style={styles.FormHeading}>Search for restaurants and add them here</Text>
              <View style={styles.Form}>
                <Iconset name="search" size={15} color="#AFAFAF" />
                <TextInput
                  style={[styles.FormInput, { marginLeft: 14 }]}
                  onChangeText={text => this.setState({ email: text })}
                  value={this.state.email}
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  placeholder="Search Restaurant"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
            </View>
            <View style={styles.DetailsArea}>
              <FlatList
                data={this.state.restaurants}
                style={styles.FlatList}
                renderItem={({ item }) => (
                  <View style={styles.Card}>
                    <View style={styles.CardContent}>
                      <Image
                        source={item.profile}
                        resizeMode="contain"
                        style={styles.CardProfile}
                      />
                      <View style={styles.CardHeadings}>
                        <Text style={styles.RestaurantName}>{item.name}</Text>
                        <Text style={styles.RestaurantDetails}>{item.address}</Text>
                        <Text style={styles.RestaurantDetails}>Cuisines - {item.cuisine}</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.CardButton}
                      onPress={() => this.props.navigation.navigate('details')}>
                      <Text style={styles.CardButtonText}>BOOK A TABLE</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.key}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

export default SearchScreen;
