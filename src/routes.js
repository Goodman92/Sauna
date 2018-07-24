import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import LoginScreen from './screens/login/login';
import SignupScreen from './screens/signup/signup';
import ExploreScreen from './screens/explore/explore';
import LoadingScreen from './screens/loading/loading';

const applicationStack = {
  Explore: {
    screen: ExploreScreen,
  },
  Contribute: {
    screen: ExploreScreen,
  },
  Visit: {
    screen: ExploreScreen,
  },
};

const authenticationStack = {
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen
  }
};

const authenticationStackConfig = {
  initialRouteName: 'Login',
  headerMode: 'none'
};

const applicationStackConfig = {
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName = null;

      if (routeName === 'Explore')
        iconName = 'globe';
      else if (routeName === 'Contribute')
        iconName = 'plus';
      else
        iconName = 'anchor';

      return <Icon name={iconName} size={25} color={tintColor}/>;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
};

const ApplicationNavigator = createBottomTabNavigator(applicationStack, applicationStackConfig);
const AuthenticationNavigator = createStackNavigator(authenticationStack, authenticationStackConfig);


const rootStack = {
  AuthLoading: LoadingScreen,
  App: ApplicationNavigator,
  Auth: AuthenticationNavigator
};

const RootNavigator = createSwitchNavigator(rootStack, {initialRouteName: 'App'});

export default RootNavigator;