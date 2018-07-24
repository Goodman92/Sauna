import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {Button} from 'react-native-material-ui';
import TextFieldValidator from '../../components/validator/text-field-validator';

import globalStyles from '../../styles/globalStyles';
import loginStyles from '../login/loginStyles';
import signupStyles from './signupStyles';


class SignUpScreen extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
    valid: false
  };

  validator = {
    username: {
      required: true,
      minLength: 1,
      maxLength: 15,
    },
    email: {
      required: true,
      maxLength: 256,
    },
    password: {
      required: true,
      minLength: 4,
      maxLength: 256,
      custom: (password) => {
        if (this.state.rePassword && password)
          return password === this.state.rePassword ? null : 'Passwords do not match';
        return null;
      }
    },
    rePassword: {
      required: true,
      minLength: 4,
      maxLength: 256,
      custom: (rePassword) => {
        if (this.state.password && rePassword)
          return rePassword === this.state.password ? null : 'Passwords do not match';
        return null;
      }
    }
  };

  onSignupClick = () => {
    this.props.navigation.navigate('Login');
  };

  updateState = (key, value, fieldValid) => {
    this.validator[key].valid = fieldValid;
    const valid = this._formIsValid();

    this.setState({[key]: value, valid: valid});
  };

  _formIsValid = () => {
    const {validator} = this;

    return validator.username.valid && validator.email.valid &&
      validator.password.valid && validator.rePassword.valid;
  };

  render() {
    let {username, email, password, rePassword, valid} = this.state;

    return (
      <ImageBackground style={loginStyles.backgroundImage}
                       source={require('../../assets/background.jpg')}>
        <View style={[loginStyles.introSection]}>
          <View style={[loginStyles.introLogoSection]}>
            <Text style={[loginStyles.whiteCenter, globalStyles.h3]}>
              {'Signup'.toUpperCase()}
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
        <View style={signupStyles.mainContainer}>
          <TextFieldValidator validator={this.validator.username}>
            <TextField label='Username' baseColor="#fff" tintColor="#fff" textContentType="username"
                       value={username} onChangeText={(val, valid) => this.updateState('username', val, valid)}/>
          </TextFieldValidator>
          <TextFieldValidator validator={this.validator.email}>
            <TextField label='Email' baseColor="#fff" tintColor="#fff" textContentType="emailAddress"
                       value={email} onChangeText={(val, valid) => this.updateState('email', val, valid)}/>
          </TextFieldValidator>
          <TextFieldValidator validator={this.validator.password}>
            <TextField label='Password' baseColor="#fff" tintColor="#fff" textContentType="password"
                       value={password} onChangeText={(val, valid) => this.updateState('password', val, valid)}/>
          </TextFieldValidator>
          <TextFieldValidator validator={this.validator.rePassword}>
            <TextField label='Confirm password' baseColor="#fff" tintColor="#fff" textContentType="password"
                       value={rePassword} onChangeText={(val, valid) => this.updateState('rePassword', val, valid)}/>
          </TextFieldValidator>

          <View style={signupStyles.signupActionGroup}>
            <Button raised default text="Signup" disabled={!valid} onPress={this.onSignupClick}/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default SignUpScreen;