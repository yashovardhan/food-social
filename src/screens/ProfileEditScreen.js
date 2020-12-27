import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePicker, Permissions } from 'expo';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/ProfileEditScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class ProfileEditScreen extends Component {
  state = {
    fontLoaded: false,
    name: 'Alexa John',
    phone: '+91-8974520447',
    email: 'alexajohn@gmail.com',
    anniversary: '15-07-1992',
    birthday: '15-07-1992',
    profile: require('../../assets/images/profile.jpg'),
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

  pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ profile: { uri: result.uri } });
      }
    } else {
      throw new Error('CAMERA_ROLL permission not granted');
    }
  };

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
            <KeyboardAwareScrollView style={styles.MainArea} bounces={false}>
              <View style={styles.Profile}>
                <View style={styles.ProfileImageContainer}>
                  <Image
                    source={this.state.profile}
                    style={styles.ProfileImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.EditPhotoContainer}>
                  <TouchableOpacity onPress={this.pickImage}>
                    <Text style={styles.EditPhoto}>Edit Photo</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.FormText}>Name</Text>
              <View style={styles.Form}>
                <TextInput
                  style={styles.FormInput}
                  onChangeText={text => this.setState({ name: text })}
                  value={this.state.name}
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="default"
                  placeholder="Name"
                  textContentType="name"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <Text style={styles.FormText}>Mobile</Text>
              <View style={styles.Form}>
                <TextInput
                  style={styles.FormInput}
                  onChangeText={text => this.setState({ phone: text })}
                  value={this.state.phone}
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="numeric"
                  placeholder="Contact Number"
                  textContentType="telephoneNumber"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <Text style={styles.FormText}>Email</Text>
              <View style={styles.Form}>
                <TextInput
                  style={styles.FormInput}
                  onChangeText={text => this.setState({ email: text })}
                  value={this.state.email}
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="email-address"
                  placeholder="username@example.com"
                  textContentType="emailAddress"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <Text style={styles.FormText}>Birthday</Text>
              <View style={styles.Form}>
                <TextInput
                  style={styles.FormInput}
                  onChangeText={text => this.setState({ birthday: text })}
                  value={this.state.birthday}
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="numeric"
                  placeholder="dd - mm - yyyy"
                  textContentType="numeric"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <Text style={styles.FormText}>Marriage Anniversary</Text>
              <View style={styles.Form}>
                <TextInput
                  style={styles.FormInput}
                  onChangeText={text => this.setState({ anniversary: text })}
                  value={this.state.anniversary}
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="numeric"
                  placeholder="dd - mm - yyyy"
                  textContentType="numeric"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <TouchableOpacity
                style={styles.LogoutButton}
                onPress={() => this.props.navigation.navigate('changepassword')}>
                <Text style={styles.LogoutButtonText}>CHANGE PASSWORD</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
            <TouchableOpacity
              style={styles.SubmitButton}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.SubmitButtonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

export default ProfileEditScreen;
