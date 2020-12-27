import React, { Component } from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Easing, Animated, StatusBar } from 'react-native';
import * as Font from 'expo-font';
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
import NotificationScreen from './NotificationScreen';
import UserFeedbackScreen from './UserFeedbackScreen';
import ProfileEditScreen from './ProfileEditScreen';
import ChangePasswordScreen from './ChangePasswordScreen';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

function ActivityFlow() {
  return (
    <Stack.Navigator
      initialRouteName="offer"
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="offer" component={OfferScreen} />
      <Stack.Screen name="coupon" component={CouponScreen} />
    </Stack.Navigator>
  )
};

function PointsFlow() {
  return (
    <Stack.Navigator
      initialRouteName="pointsoffer"
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="pointsoffer" component={PointsOfferScreen} />
      <Stack.Screen name="redeem" component={RedemptionScreen} />
    </Stack.Navigator>
  )
};

function SearchFlow() {
  return (
    <Stack.Navigator
      initialRouteName="searchhome"
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="searchhome" component={SearchScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
    </Stack.Navigator>
  )
};

function OfferFlow() {
  return (
    <Stack.Navigator
      initialRouteName="offers"
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="offers" component={OfferTabFlow} />
      <Stack.Screen name="points" component={PointsFlow} />
      <Stack.Screen name="activity" component={ActivityFlow} />
    </Stack.Navigator>
  )
}

function FeedbackFlow() {
  return (
    <Stack.Navigator
      initialRouteName="allfeedback"
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="allfeedback" component={FeedbackScreen} />
      <Stack.Screen name="givefeedback" component={UserFeedbackScreen} />
    </Stack.Navigator>
  )
}

function ProfileFlow() {
  return (
    <Stack.Navigator
      initialRouteName="profilescreen"
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="profilescreen" component={ProfileScreen} />
      <Stack.Screen name="editprofile" component={ProfileEditScreen} />
      <Stack.Screen name="changepassword" component={ChangePasswordScreen} />
    </Stack.Navigator>
  )
}

function HomeFlow() {
  return (
    <Stack.Navigator
      initialRouteName="feedhome"
      screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="feedhome" component={HomeScreen} />
      <Stack.Screen name="noti" component={NotificationScreen} />
    </Stack.Navigator>
  )
}

function OfferTabFlow() {
  return (
    <TopTab.Navigator swipeEnabled tabBarPosition='top'
    tabBarOptions={{
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
      }}}>
      <TopTab.Screen name="Activity" component={ActivityScreen} />
      <TopTab.Screen name="Points" component={PointsScreen} />
    </TopTab.Navigator>
  )
}

function MainFlow() {
  let tabBarVisible = true;
  const state = useNavigationState(state => state)
  if (state.index > 1) {
    tabBarVisible = false;
  }

  return (
    <BottomTab.Navigator tabBarOptions={{activeTintColor: '#FF5F35',
    activeBackgroundColor: '#FFFFFF',
    inactiveTintColor: '#AFAFAF',
    inactiveBackgroundColor: '#FFFFFF',
    showLabel: false}}
    >
      <BottomTab.Screen name="home" component={HomeFlow} options={{ tabBarIcon: ({ tintColor }) => <Iconset name="feed" color={tintColor} size={24} /> }} />
      <BottomTab.Screen name="offer" component={OfferFlow} options={{ tabBarVisible, tabBarIcon: ({ tintColor }) => <Iconset name="offer" color={tintColor} size={24} />}} />
      <BottomTab.Screen name="search" component={SearchFlow} options={{ tabBarVisible, tabBarIcon: ({ tintColor }) => <Iconset name="store" color={tintColor} size={24} /> }} />
      <BottomTab.Screen name="feedback" component={FeedbackFlow} options={{ tabBarVisible, tabBarIcon: ({ tintColor }) => <Iconset name="review" color={tintColor} size={24} /> }} />
      <BottomTab.Screen name="profile" component={ProfileFlow} options={{ tabBarVisible, tabBarIcon: ({ tintColor }) => <Iconset name="user" color={tintColor} size={24} /> }} />
    </BottomTab.Navigator>
  )
}

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
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
        <StatusBar barStyle="light-content" />
        {this.state.fontLoaded ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="auth" screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="auth" component={AuthScreen} />
            <Stack.Screen name="main" component={MainFlow} />
          </Stack.Navigator>
        </NavigationContainer>
          ) : null}
      </SafeAreaView>
    );
  }
}

export default Router;
