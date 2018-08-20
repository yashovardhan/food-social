import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient, Font } from 'expo';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icoMoonConfig from '../../assets/selection.json';

const Iconset = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

class TabBar extends Component {
  state = {
    fontLoaded: false,
    menu_open: false,
    selected_secondary_route: 3,
  };

  async componentDidMount() {
    await Font.loadAsync({
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigation, renderIcon, activeTintColor, inactiveTintColor, jumpTo } = this.props;

    const { routes } = navigation.state;

    return (
      <View style={[styles.tabbar, { height: this.state.menu_open ? 'auto' : 0 }]}>
        <LinearGradient
          start={[0.97, 0.1]}
          end={[1, 0.1]}
          colors={['#FFFFFF', '#CFCFCF']}
          style={styles.tabs}>
          <View style={styles.section}>
            {routes &&
              routes.map((route, index) => {
                const focused = index === navigation.state.index;
                const tintColor = focused ? activeTintColor : inactiveTintColor;

                if (index < 3) {
                  return (
                    <TouchableOpacity
                      key={route.key}
                      style={styles.tab}
                      onPress={() => jumpTo(route.key)}>
                      <View style={styles.tab}>
                        {renderIcon({
                          route,
                          index,
                          focused,
                          tintColor,
                        })}
                      </View>
                    </TouchableOpacity>
                  );
                } else if (index === this.state.selected_secondary_route) {
                  return (
                    <TouchableOpacity
                      key={route.key}
                      style={styles.tab}
                      onPress={() => jumpTo(route.key)}>
                      <View style={styles.tab}>
                        {renderIcon({
                          route,
                          index,
                          focused,
                          tintColor,
                        })}
                      </View>
                    </TouchableOpacity>
                  );
                }
              })}
          </View>
          <View style={styles.section}>
            {routes &&
              routes.map((route, index) => {
                const focused = index === navigation.state.index;
                const tintColor = focused ? activeTintColor : inactiveTintColor;

                if (index >= 3 && index !== this.state.selected_secondary_route) {
                  return (
                    <TouchableOpacity
                      key={route.key}
                      style={styles.tab}
                      onPress={() => {
                        jumpTo(route.key);
                        this.setState({ selected_secondary_route: index });
                      }}>
                      <View style={styles.tab}>
                        {renderIcon({
                          route,
                          index,
                          focused,
                          tintColor,
                        })}
                      </View>
                    </TouchableOpacity>
                  );
                }
              })}
          </View>
        </LinearGradient>
        <View style={styles.navbutton}>
          <View style={styles.section}>
            {this.state.menu_open ? null : (
              <TouchableOpacity onPress={() => this.setState({ menu_open: true })}>
                <Iconset name="group" color="#B9B9B9" size={9} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.section}>
            {this.state.menu_open ? (
              <TouchableOpacity onPress={() => this.setState({ menu_open: false })}>
                <Iconset name="cross" color="#B9B9B9" size={20} />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flex: 4,
  },
  section: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navbutton: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;
