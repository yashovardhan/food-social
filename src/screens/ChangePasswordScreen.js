import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Header, Card } from 'react-native-elements';

import styles from '../styles/ChangePasswordScreenStyle';

class ChangePasswordScreen extends Component {
  state = {
    fontLoaded: false,
    oldpassword: null,
    newpassword: null,
    confirmpassword: null,
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
            <Header
              centerComponent={{ text: 'Change Password', style: styles.HeaderText }}
              backgroundColor="#FFFFFF"
            />
            <Card containerStyle={styles.AuthCard}>
              <Text style={styles.FormText}>Old Password</Text>
              <View style={styles.Form}>
                <TextInput
                  style={[styles.FormInput, { marginLeft: 0 }]}
                  onChangeText={text => this.setState({ oldpassword: text })}
                  value={this.state.oldpassword}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  placeholder="Enter Current Password"
                  textContentType="password"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <Text style={styles.FormText}>New Password</Text>
              <View style={styles.Form}>
                <TextInput
                  style={[styles.FormInput, { marginLeft: 0 }]}
                  onChangeText={text => this.setState({ newpassword: text })}
                  value={this.state.newpassword}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  placeholder="Enter New Password"
                  textContentType="password"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <Text style={styles.FormText}>Confirm Password</Text>
              <View style={styles.Form}>
                <TextInput
                  style={[styles.FormInput, { marginLeft: 0 }]}
                  onChangeText={text => this.setState({ confirmpassword: text })}
                  value={this.state.confirmpassword}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  placeholder="Re-type New Password"
                  textContentType="password"
                  underlineColorAndroid="rgba(0,0,0,0)"
                />
              </View>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.ButtonText}>CHANGE PASSWORD</Text>
              </TouchableOpacity>
            </Card>
          </View>
        ) : null}
      </View>
    );
  }
}

export default ChangePasswordScreen;
