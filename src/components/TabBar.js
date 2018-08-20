import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
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
      <View style={[styles.tabbar, { height: this.state.menu_open ? 110 : 55 }]}>
        <LinearGradient
          start={[1, 1]}
          colors={['#CFCFCF', '#FFFFFF']}
          locations={[0, 0.05]}
          style={styles.tabs}>
          <View style={styles.section}>
            {routes &&
              routes.map((route, index) => {
                const focused = index === navigation.state.index;
                const tintColor = focused ? activeTintColor : inactiveTintColor;

                if (index < 3) {
                  return (
                    <View style={styles.tab} key={route.key}>
                      <TouchableHighlight
                        underlayColor="rgba(255,95,53,0.09)"
                        onPress={() => jumpTo(route.key)}
                        style={styles.touch}>
                        <View style={styles.tab}>
                          {renderIcon({
                            route,
                            index,
                            focused,
                            tintColor,
                          })}
                        </View>
                      </TouchableHighlight>
                    </View>
                  );
                } else if (index === this.state.selected_secondary_route) {
                  return (
                    <View style={styles.tab} key={route.key}>
                      <TouchableHighlight
                        underlayColor="rgba(255,95,53,0.09)"
                        onPress={() => jumpTo(route.key)}
                        style={styles.touch}>
                        <View style={styles.tab}>
                          {renderIcon({
                            route,
                            index,
                            focused,
                            tintColor,
                          })}
                        </View>
                      </TouchableHighlight>
                    </View>
                  );
                }
              })}
          </View>
          {this.state.menu_open ? (
            <View style={styles.section}>
              {routes &&
                routes.map((route, index) => {
                  const focused = index === navigation.state.index;
                  const tintColor = focused ? activeTintColor : inactiveTintColor;

                  if (index >= 3 && index !== this.state.selected_secondary_route) {
                    return (
                      <View style={styles.tab} key={route.key}>
                        <TouchableHighlight
                          underlayColor="rgba(255,95,53,0.09)"
                          onPress={() => {
                            jumpTo(route.key);
                            this.setState({ selected_secondary_route: index });
                          }}
                          style={styles.touch}>
                          <View style={styles.tab}>
                            {renderIcon({
                              route,
                              index,
                              focused,
                              tintColor,
                            })}
                          </View>
                        </TouchableHighlight>
                      </View>
                    );
                  }
                })}
            </View>
          ) : null}
        </LinearGradient>
        <View style={styles.navbutton}>
          {this.state.menu_open ? null : (
            <View style={styles.section}>
              <TouchableHighlight
                underlayColor="rgba(255,95,53,0.09)"
                onPress={() => this.setState({ menu_open: true })}
                style={styles.touch}>
                <Iconset name="group" color="#B9B9B9" size={9} />
              </TouchableHighlight>
            </View>
          )}
          {this.state.menu_open ? (
            <View style={styles.section}>
              <TouchableHighlight
                underlayColor="rgba(255,95,53,0.09)"
                onPress={() => this.setState({ menu_open: false })}
                style={styles.touch}>
                <Iconset name="cross" color="#B9B9B9" size={20} />
              </TouchableHighlight>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  touch: {
    borderRadius: 100,
    height: 45,
    width: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flex: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flex: 1,
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
