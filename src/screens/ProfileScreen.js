import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/ProfileScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class ProfileScreen extends Component {
  state = {
    fontLoaded: false,
    name: 'Alexa John',
    mobile: '+91-8974520447',
    email: 'alexajohn@gmail.com',
    anniversary: '15 - 07 - 1992',
    birthday: '15 - 07 - 1992',
    upvotes: 12,
    background: require('../../assets/images/profile.jpg'),
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
          <View style={styles.Back}>
            <View style={styles.GraphicArea}>
              <Image source={this.state.background} resizeMode="cover" style={styles.Graphic} />
              <Text style={styles.Name}>{this.state.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.EditButton}
              onPress={() => this.props.navigation.navigate('editprofile')}>
              <Iconset name="pencil" color="#FFFFFF" size={22} />
            </TouchableOpacity>
            <ScrollView style={{ flexGrow: 7 }} contentContainerStyle={styles.DetailsArea}>
              <Text style={styles.Heading}>Mobile</Text>
              <Text style={styles.Description}>{this.state.mobile}</Text>
              <Text style={styles.Heading}>Email</Text>
              <Text style={styles.Description}>{this.state.email}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.Heading}>Marriage Anniversary</Text>
                  <Text style={styles.Description}>{this.state.anniversary}</Text>
                </View>
                <View>
                  <Text style={styles.Heading}>Birthday</Text>
                  <Text style={styles.Description}>{this.state.birthday}</Text>
                </View>
              </View>
              <View style={styles.UpvoteSection}>
                <TouchableOpacity style={styles.UpvoteButton}>
                  <Iconset name="thumb-up" color="#FFFFFF" size={16} />
                </TouchableOpacity>
                <Text style={styles.Upvotes}>{this.state.upvotes} Upvotes</Text>
              </View>
              <TouchableOpacity
                style={styles.LogoutButton}
                onPress={() => this.props.navigation.navigate('auth')}>
                <Text style={styles.LogoutButtonText}>LOG OUT</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        ) : null}
      </View>
    );
  }
}

export default ProfileScreen;
