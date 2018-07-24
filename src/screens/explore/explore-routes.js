import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import MapSearchScreen from './map-search';
import ListSearchScreen from './list-search';

const exploreStack = {
  List: {
    screen: ListSearchScreen,
  },
  Map: {
    screen: MapSearchScreen,
  }
};

const exploreStackConfig = {
  initialRouteName: 'List',
  headerMode: 'none'
};

const ExploreNavigator = createMaterialTopTabNavigator(exploreStack, exploreStackConfig);

export default ExploreNavigator;