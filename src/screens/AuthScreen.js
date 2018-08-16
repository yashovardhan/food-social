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
import { Card } from 'react-native-elements';

import styles from '../styles/AuthScreenStyle';

class AuthScreen extends Component {
  state = {
    fontLoaded: false,
    backPattern: '',
    appIcon: '',
    emailIcon: '',
    facebookIcon: '',
    googleIcon: '',
    phoneIcon: '',
    passwordIcon: '',
    successIcon: '',
    userIcon: '',
    email: '',
    password: '',
  };

  async componentDidMount() {
    await Font.loadAsync({
      'poppins-bold': require('../../assets/fonts/Poppins-Bold.otf'),
      'poppins-extralight': require('../../assets/fonts/Poppins-ExtraLight.otf'),
      'poppins-light': require('../../assets/fonts/Poppins-Light.otf'),
      'poppins-regular': require('../../assets/fonts/Poppins-Regular.otf'),
      'poppins-medium': require('../../assets/fonts/Poppins-Medium.otf'),
    });

    const backPattern = await require('../../assets/images/back-pattern.png');
    const appIcon = await require('../../assets/icons/app-icon.png');
    const emailIcon = await require('../../assets/icons/email.png');
    const facebookIcon = await require('../../assets/icons/facebook.png');
    const googleIcon = await require('../../assets/icons/google.png');
    const phoneIcon = await require('../../assets/icons/phone.png');
    const passwordIcon = await require('../../assets/icons/password.png');
    const successIcon = await require('../../assets/icons/success.png');
    const userIcon = await require('../../assets/icons/user.png');

    this.setState({
      fontLoaded: true,
      backPattern,
      appIcon,
      emailIcon,
      facebookIcon,
      googleIcon,
      phoneIcon,
      passwordIcon,
      successIcon,
      userIcon,
    });
  }

  LoginCard() {
    return (
      <Card containerStyle={styles.AuthCard}>
        <View style={styles.SocialButtons}>
          <TouchableOpacity style={styles.FacebookButton}>
            <Image
              source={this.state.facebookIcon}
              resizeMode="contain"
              style={{ width: '100%' }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.GoogleButton}>
            <Image source={this.state.googleIcon} resizeMode="contain" style={{ width: '100%' }} />
          </TouchableOpacity>
        </View>
        <View style={styles.LoginDivider}>
          <Text style={styles.LoginDividerLine}>─────</Text>
          <Text style={styles.LoginDividerText}>&nbsp; OR &nbsp;</Text>
          <Text style={styles.LoginDividerLine}>─────</Text>
        </View>
        <View style={styles.EmailForm}>
          <Image source={this.state.emailIcon} resizeMode="center" style={styles.EmailFormIcon} />
          <TextInput
            style={styles.EmailFormInput}
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
        <View style={styles.PasswordForm}>
          <Image
            source={this.state.passwordIcon}
            resizeMode="center"
            style={styles.PasswordFormIcon}
          />
          <TextInput
            style={styles.PasswordFormInput}
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
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ForgotPass}>
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
        <View style={[styles.EmailForm, { marginTop: 50 }]}>
          <Image source={this.state.emailIcon} resizeMode="center" style={styles.EmailFormIcon} />
          <TextInput
            style={styles.EmailFormInput}
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
        <TouchableOpacity style={[styles.LoginButton, { marginTop: 80 }]}>
          <Text style={styles.LoginButtonText}>SEND LINK</Text>
        </TouchableOpacity>
      </Card>
    );
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
                  <TouchableOpacity style={styles.LoginSelection}>
                    <Text style={styles.LoginSelectionText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.SignupSelection}>
                    <Text style={styles.SignupSelectionText}>Signup</Text>
                  </TouchableOpacity>
                </View>
                <View>{this.LoginCard()}</View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </KeyboardAvoidingView>
    );
  }
}

export default AuthScreen;
