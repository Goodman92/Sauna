import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {Button} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../styles/globalStyles';
import loginStyles from './loginStyles';


class LoginScreen extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onSignupClick = () => {
    this.props.navigation.navigate('Signup');
  };

  onFacebookLoginClick = () => {
  };

  onLoginClick = () => {
    this.props.navigation.navigate('Explore');
  };

  render() {
    let {email, password} = this.state;

    return (
      <ImageBackground style={loginStyles.backgroundImage}
                       source={require('../../assets/background.jpg')}>
        <View style={loginStyles.upperContainer}>
          <TouchableOpacity style={globalStyles.centerizedRow} onPress={this.onSignupClick}>
            <Icon name="plus" size={20} color="#fff" style={loginStyles.createButton}/>
            <Text style={globalStyles.white}> Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.mainContainer}>
          <View style={[loginStyles.introSection]}>
            <View style={[loginStyles.introLogoSection]}>
              <Text style={[loginStyles.whiteCenter, globalStyles.h3]}>
                {'Login'.toUpperCase()}
              </Text>
              <View style={[loginStyles.loginDivider]}>
                <View style={[loginStyles.doubleLines]}/>
                <Text style={[loginStyles.textDivider]}>
                  to
                </Text>
                <View style={[loginStyles.doubleLines]}/>
              </View>
              <Text style={[loginStyles.whiteCenter, globalStyles.h2]}>
                {'Sauna'.toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={[loginStyles.loginSection]}>
            <TextField label='Email' baseColor="#fff" tintColor="#fff"
                       value={email} onChangeText={ (email) => this.setState({email}) }/>
            <TextField label='Password' baseColor="#fff" tintColor="#fff"
                       value={password} onChangeText={ (password) => this.setState({password})}/>
            <View style={loginStyles.loginActionGroup}>
              <Button raised default text="Login" onPress={this.onLoginClick}/>
              <View style={[loginStyles.loginDivider, globalStyles.mt5, globalStyles.mb5]}>
                <View style={[loginStyles.singleLine, globalStyles.ml40]}/>
                <Text style={[loginStyles.textDivider]}>
                  or
                </Text>
                <View style={[loginStyles.singleLine, globalStyles.mr40]}/>
              </View>
              <Button raised default text="Login with facebook" onPress={this.onFacebookLoginClick}
                      icon={<Icon name="facebook" size={20} color="#fff" style={loginStyles.createButton}/>}
                      style={{container: loginStyles.facebookBlue, text: globalStyles.white}}/>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;