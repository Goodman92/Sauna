import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-material-ui';

import globalStyles from '../../styles/globalStyles';
import {Card} from 'react-native-material-ui';
import SearchBar from './components/search-bar';

class MapSearchScreen extends React.Component {

  render() {
    return (
      <View style={{backgroundColor: '#f6f6f7', flex:1}}>
        <Card>
          <Text>Jtn kontenttii?</Text>
        </Card>
      </View>
    );
  }
}

export default MapSearchScreen;