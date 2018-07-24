import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, Text, View} from 'react-native';

class LoadingScreen extends React.Component {
  APP_ROUTE = 'App';
  AUTH_ROUTE = 'Auth';

  constructor(props) {
    super(props);
    this._bootstrapApplication();
  };

  _bootstrapApplication = async() => {
    const token = await AsyncStorage.getItem('token');
    const nextRoute = token ? this.APP_ROUTE : this.AUTH_ROUTE;

    this.props.navigation.navigate(nextRoute);
  };

  render() {
    return (
      <View>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

export default LoadingScreen;