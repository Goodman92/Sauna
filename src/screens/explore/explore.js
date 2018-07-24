import React from 'react';
import {Text, View} from 'react-native';
import ExploreNavigator from './explore-routes';
import HeaderBar from '../../components/header-bar/header-bar';

class ExploreScreen extends React.Component {

  render() {
    return (
      <React.Fragment>
        <HeaderBar/>
        <ExploreNavigator/>
      </React.Fragment>
    );
  }
}

export default ExploreScreen;