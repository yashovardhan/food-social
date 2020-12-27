import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import * as Font from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import styles from '../styles/UserFeedbackScreenStyle';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class UserFeedbackScreen extends Component {
  state = {
    fontLoaded: false,
    name: 'Urban Tadka',
    address: 'Malviya Nagar, Jaipur',
    points: 400,
    background: require('../../assets/images/coupon3.jpg'),
    orderitems: [
      {
        name: 'Italian Pizza',
      },
      {
        name: 'Margherita Pizza',
      },
      {
        name: 'OTC Pizza',
      },
    ],
    angry: require('../../assets/icons/angry.png'),
    sad: require('../../assets/icons/sad.png'),
    confused: require('../../assets/icons/confused.png'),
    smile: require('../../assets/icons/smile.png'),
    happy: require('../../assets/icons/happy.png'),
    angry_small: require('../../assets/icons/angry_small.png'),
    sad_small: require('../../assets/icons/sad_small.png'),
    confused_small: require('../../assets/icons/confused_small.png'),
    smile_small: require('../../assets/icons/smile_small.png'),
    happy_small: require('../../assets/icons/happy_small.png'),
    rating: 3,
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
              <View style={styles.HeadingArea}>
                <Text style={styles.Heading}>Pizza House</Text>
                <Text style={styles.SubHeading}> Malviya Nagar, Jaipur</Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text style={styles.SubHeading}>Rate your experience</Text>
                {this.state.orderitems.map((item, i) => (
                  <Card containerStyle={styles.ItemCard} key={i}>
                    <Text style={styles.ItemHeading}>{item.name}</Text>
                    <View style={styles.ItemFeedback}>
                      <TouchableOpacity onPress={() => this.setState({ rating: 1 })}>
                        {this.state.rating === 1 ? (
                          <Image source={this.state.angry} style={styles.FeedbackIcon} />
                        ) : (
                          <Image source={this.state.angry_small} style={styles.FeedbackIconSmall} />
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.setState({ rating: 2 })}>
                        {this.state.rating === 2 ? (
                          <Image source={this.state.sad} style={styles.FeedbackIcon} />
                        ) : (
                          <Image source={this.state.sad_small} style={styles.FeedbackIconSmall} />
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.setState({ rating: 3 })}>
                        {this.state.rating === 3 ? (
                          <Image source={this.state.confused} style={styles.FeedbackIcon} />
                        ) : (
                          <Image
                            source={this.state.confused_small}
                            style={styles.FeedbackIconSmall}
                          />
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.setState({ rating: 4 })}>
                        {this.state.rating === 4 ? (
                          <Image source={this.state.smile} style={styles.FeedbackIcon} />
                        ) : (
                          <Image source={this.state.smile_small} style={styles.FeedbackIconSmall} />
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.setState({ rating: 5 })}>
                        {this.state.rating === 5 ? (
                          <Image source={this.state.happy} style={styles.FeedbackIcon} />
                        ) : (
                          <Image source={this.state.happy_small} style={styles.FeedbackIconSmall} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </Card>
                ))}
                <Text style={[styles.SubHeading, { marginTop: 20 }]}>Share your experience</Text>
                <TextInput
                  style={styles.ExperienceText}
                  multiline
                  underlineColorAndroid="#DFDFDF"
                />
              </View>
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

export default UserFeedbackScreen;
