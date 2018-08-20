import React, { Component } from 'react';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { View } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';
import BillScreen from './BillScreen';
import MilestoneScreen from './MilestoneScreen';
import FeedbackScreen from './FeedbackScreen';
import ProfileScreen from './ProfileScreen';

import TabBar from '../components/TabBar';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class Router extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const AppFlow = createSwitchNavigator(
      {
        auth: AuthScreen,
        main: createBottomTabNavigator(
          {
            home: {
              screen: HomeScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Iconset name="feed" color={tintColor} size={24} />,
              }),
            },
            activity: {
              screen: ActivityScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Iconset name="offer" color={tintColor} size={24} />,
              }),
            },
            search: {
              screen: SearchScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Iconset name="store" color={tintColor} size={24} />,
              }),
            },
            noti: {
              screen: NotificationScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Iconset name="noti" color={tintColor} size={24} />,
              }),
            },
            bills: {
              screen: BillScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Iconset name="bill" color={tintColor} size={24} />,
              }),
            },
            points: {
              screen: MilestoneScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                  <Iconset name="milestone" color={tintColor} size={24} />
                ),
              }),
            },
            feedback: {
              screen: FeedbackScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                  <Iconset name="review" color={tintColor} size={24} />
                ),
              }),
            },
            profile: {
              screen: ProfileScreen,
              navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Iconset name="user" color={tintColor} size={24} />,
              }),
            },
          },
          {
            tabBarComponent: TabBar,
            tabBarOptions: {
              activeTintColor: '#FF5F35',
              activeBackgroundColor: '#FFFFFF',
              inactiveTintColor: '#AFAFAF',
              inactiveBackgroundColor: '#FFFFFF',
              showLabel: false,
            },
          }
        ),
      },
      {}
    );

    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        {this.state.fontLoaded ? <AppFlow /> : null}
      </View>
    );
  }
}

export default Router;
