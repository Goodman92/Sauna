import React from 'react';
import {Toolbar} from 'react-native-material-ui';

class HeaderBar extends React.Component {
  render() {
    return (
      <Toolbar leftElement="menu" centerElement="Sauna"/>
    );
  }
}

export default HeaderBar;