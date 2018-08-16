import React, { Component } from 'react';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';
import BillScreen from './BillScreen';
import PointScreen from './PointScreen';
import FeedbackScreen from './FeedbackScreen';
import ProfileScreen from './ProfileScreen';

class Router extends Component {
  render() {
    const AppFlow = createSwitchNavigator(
      {
        auth: AuthScreen,
        main: createBottomTabNavigator(
          {
            home: HomeScreen,
            activity: ActivityScreen,
            search: SearchScreen,
            noti: NotificationScreen,
            bills: BillScreen,
            points: PointScreen,
            feedback: FeedbackScreen,
            profile: ProfileScreen,
          },
          {}
        ),
      },
      {}
    );

    return <AppFlow />;
  }
}

export default Router;
