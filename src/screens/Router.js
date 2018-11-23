import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { View, Platform } from 'react-native';
import { Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen';
import SearchScreen from './SearchScreen';
import PointsScreen from './PointsScreen';
import FeedbackScreen from './FeedbackScreen';
import ProfileScreen from './ProfileScreen';
import OfferScreen from './OfferScreen';
import CouponScreen from './CouponScreen';
import PointsOfferScreen from './PointsOfferScreen';
import RedemptionScreen from './RedemptionScreen';
import DetailsScreen from './DetailsScreen';

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
    const TabNavOptions = {
      tabBarPosition: 'top',
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FF5F35',
        activeBackgroundColor: '#FFFFFF',
        inactiveTintColor: '#AFAFAF',
        inactiveBackgroundColor: '#FFFFFF',
        showIcon: false,
        upperCaseLabel: false,
        labelStyle: {
          fontSize: 13,
          fontFamily: 'poppins-medium',
        },
        style: {
          backgroundColor: '#FFFFFF',
          shadowColor: 'transparent',
          borderTopColor: '#FFFFFF',
        },
        indicatorStyle: {
          borderBottomColor: '#FF5F35',
          borderBottomWidth: 2,
        },
      },
    };
    const ActivityFlow = createStackNavigator(
      {
        activityhome: ActivityScreen,
        offer: OfferScreen,
        coupon: CouponScreen,
      },
      {
        headerMode: 'none',
      }
    );
    const PointsFlow = createStackNavigator(
      {
        pointshome: PointsScreen,
        pointsoffer: PointsOfferScreen,
        redeem: RedemptionScreen,
      },
      {
        headerMode: 'none',
      }
    );
    const SearchFlow = createStackNavigator(
      {
        searchhome: SearchScreen,
        details: DetailsScreen,
      },
      {
        headerMode: 'none',
      }
    );
    const OfferFlow = createMaterialTopTabNavigator(
      {
        activity: {
          screen: ActivityFlow,
          navigationOptions: {
            title: 'Activity',
          },
        },
        points: {
          screen: PointsFlow,
          navigationOptions: {
            title: 'Points',
          },
        },
      },
      {
        ...TabNavOptions,
        lazy: false,
      }
    );
    const MainFlow = createBottomTabNavigator(
      {
        home: {
          screen: HomeScreen,
          navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Iconset name="feed" color={tintColor} size={24} />,
          }),
        },
        offer: {
          screen: OfferFlow,
          navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Iconset name="offer" color={tintColor} size={24} />,
          }),
        },
        search: {
          screen: SearchFlow,
          navigationOptions: ({ navigation }) => {
            let tabBarVisible = true;
            if (navigation.state.index > 0) {
              tabBarVisible = false;
            }
            return {
              tabBarVisible,
              tabBarIcon: ({ tintColor }) => <Iconset name="store" color={tintColor} size={24} />,
            };
          },
        },
        feedback: {
          screen: FeedbackScreen,
          navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => <Iconset name="review" color={tintColor} size={24} />,
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
        tabBarOptions: {
          activeTintColor: '#FF5F35',
          activeBackgroundColor: '#FFFFFF',
          inactiveTintColor: '#AFAFAF',
          inactiveBackgroundColor: '#FFFFFF',
          showLabel: false,
        },
      }
    );
    const AppFlow = createSwitchNavigator(
      {
        auth: AuthScreen,
        main: MainFlow,
      },
      {}
    );

    return (
      <View
        style={{ flex: 1, backgroundColor: '#000000', paddingTop: Platform.OS === 'ios' ? 30 : 0 }}>
        {this.state.fontLoaded ? <AppFlow /> : null}
      </View>
    );
  }
}

export default Router;
