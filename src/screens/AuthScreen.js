import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Font, LinearGradient } from 'expo';
import { Card, Icon } from 'react-native-elements';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/AuthScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class AuthScreen extends Component {
  state = {
    fontLoaded: false,
    backPattern: '',
    appIcon: '',
    facebookIcon: '',
    googleIcon: '',
    successIcon: '',
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    phone: '',
    chosenCard: 'login',
  };

  async componentDidMount() {
    await Font.loadAsync({
      'poppins-bold': require('../../assets/fonts/Poppins-Bold.otf'),
      'poppins-extralight': require('../../assets/fonts/Poppins-ExtraLight.otf'),
      'poppins-light': require('../../assets/fonts/Poppins-Light.otf'),
      'poppins-regular': require('../../assets/fonts/Poppins-Regular.otf'),
      'poppins-medium': require('../../assets/fonts/Poppins-Medium.otf'),
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });

    const backPattern = await require('../../assets/images/back-pattern.png');
    const appIcon = await require('../../assets/icons/app-icon.png');
    const facebookIcon = await require('../../assets/icons/facebook.png');
    const googleIcon = await require('../../assets/icons/google.png');
    const successIcon = await require('../../assets/icons/success.png');

    this.setState({
      fontLoaded: true,
      backPattern,
      appIcon,
      facebookIcon,
      googleIcon,
      successIcon,
    });
  }

  LoginCard() {
    return (
      <Card containerStyle={styles.AuthCard}>
        <View style={styles.SocialButtons}>
          <TouchableOpacity>
            <Image
              source={this.state.facebookIcon}
              resizeMode="center"
              style={styles.FacebookButton}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={this.state.googleIcon} resizeMode="center" style={styles.GoogleButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.LoginDivider}>
          <Text style={styles.LoginDividerLine}>─────</Text>
          <Text style={styles.LoginDividerText}>&nbsp; OR &nbsp;</Text>
          <Text style={styles.LoginDividerLine}>─────</Text>
        </View>
        <View style={styles.Form}>
          <Iconset name="email" size={15} />
          <TextInput
            style={[styles.FormInput, { marginLeft: 14 }]}
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
        <View style={styles.Form}>
          <Iconset name="password" size={20} />
          <TextInput
            style={styles.FormInput}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            placeholder="password"
            textContentType="password"
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => this.props.navigation.navigate('main')}>
          <Text style={styles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ForgotPass}
          onPress={() => this.setState({ chosenCard: 'forgot' })}>
          <Text style={styles.ForgotPassText}>Forgot Password?</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  ForgotPasswordCard() {
    return (
      <Card containerStyle={styles.AuthCard}>
        <Text style={styles.ForgotPasswordCardText}>
          Enter your email address and we will send you a link to reset your password.
        </Text>
        <View style={[styles.Form, { marginTop: 50 }]}>
          <Iconset name="email" size={15} />
          <TextInput
            style={[styles.FormInput, { marginLeft: 14 }]}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            keyboardType="email-address"
            placeholder="Registered Email Address"
            textContentType="emailAddress"
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
        <TouchableOpacity
          style={[styles.Button, { marginTop: 80 }]}
          onPress={() => this.setState({ chosenCard: 'reset' })}>
          <Text style={styles.ButtonText}>SEND LINK</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  ResetPasswordCard() {
    return (
      <Card containerStyle={styles.AuthCard}>
        <View style={styles.ResetPasswordHeading}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Icon name="close" color="#090909" type="evilicons" size={20} />
          </TouchableOpacity>
          <Text style={styles.ResetPasswordHeadingText}>Reset Password</Text>
        </View>

        <View style={[styles.Form, { marginTop: 50 }]}>
          <TextInput
            style={[styles.FormInput, { marginLeft: 0 }]}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            placeholder="Enter New Password"
            textContentType="password"
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
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
          style={[styles.Button, { marginTop: 60 }]}
          onPress={() => this.setState({ chosenCard: 'resetsuccess' })}>
          <Text style={styles.ButtonText}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  ResetPasswordSuccessCard() {
    return (
      <Card containerStyle={styles.AuthCard}>
        <View style={styles.ResetPasswordSuccessCard}>
          <Image
            source={this.state.successIcon}
            resizeMode="contain"
            style={styles.ResetPasswordSuccessCardIcon}
          />
        </View>
        <Text style={styles.ResetPasswordSuccessCardText}>
          Your password has been successfully changed!
        </Text>
        <TouchableOpacity
          style={[styles.Button, { marginTop: 60 }]}
          onPress={() => this.setState({ chosenCard: 'login' })}>
          <Text style={styles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  SignupCard() {
    return (
      <Card containerStyle={styles.AuthCard}>
        <View style={styles.Form}>
          <Iconset name="username" size={20} />
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
        <View style={styles.Form}>
          <Iconset name="phone" size={20} />
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
        <View style={styles.Form}>
          <Iconset name="email" size={15} />
          <TextInput
            style={[styles.FormInput, { marginLeft: 14 }]}
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
        <View style={styles.Form}>
          <Iconset name="password" size={20} />
          <TextInput
            style={styles.FormInput}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            placeholder="password"
            textContentType="password"
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => this.props.navigation.navigate('main')}>
          <Text style={styles.ButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </Card>
    );
  }

  displayCard() {
    switch (this.state.chosenCard) {
      case 'login':
        return this.LoginCard();
      case 'signup':
        return this.SignupCard();
      case 'forgot':
        return this.ForgotPasswordCard();
      case 'reset':
        return this.ResetPasswordCard();
      case 'resetsuccess':
        return this.ResetPasswordSuccessCard();
      default:
        return this.LoginCard();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={[styles.Back, { flex: 1 }]} behavior="position" enabled>
        {this.state.fontLoaded ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.Back}>
              <View style={styles.Back}>
                <View style={styles.TopBack}>
                  <LinearGradient colors={['#FF8A59', '#FF5F35']} style={{ flex: 1 }}>
                    <Image
                      source={this.state.backPattern}
                      resizeMode="cover"
                      style={styles.BackImage}
                    />
                  </LinearGradient>
                </View>
                <View style={styles.MiddleBack} />
                <View style={styles.BottomBack} />
              </View>
              <View style={styles.Front}>
                <Image source={this.state.appIcon} resizeMode="contain" style={styles.AppIcon} />
                <View style={styles.Headings}>
                  <TouchableOpacity
                    style={styles.LoginSelection}
                    onPress={() => this.setState({ chosenCard: 'login' })}>
                    <Text
                      style={[
                        styles.LoginSelectionText,
                        {
                          color:
                            this.state.chosenCard === 'login'
                              ? '#FFFFFF'
                              : 'rgba(256,256,256,0.56)',
                        },
                      ]}>
                      Login
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.SignupSelection}
                    onPress={() => this.setState({ chosenCard: 'signup' })}>
                    <Text
                      style={[
                        styles.SignupSelectionText,
                        {
                          color:
                            this.state.chosenCard === 'signup'
                              ? '#FFFFFF'
                              : 'rgba(256,256,256,0.56)',
                        },
                      ]}>
                      Signup
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>{this.displayCard()}</View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </KeyboardAvoidingView>
    );
  }
}

export default AuthScreen;
