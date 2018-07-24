import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import searchBarStyles from './search-bar-styles';
import globalStyles from '../../../styles/globalStyles';

class SearchBar extends React.Component {

  disabledStyles = (disabled) => {
    return disabled ? globalStyles.disabled : null;
  };

  renderStatus = (open) => {
    const iconName = open ? 'chevron-up' : 'chevron-down';
    const text = open ? 'Close filters' : 'Open filters';

    return (
      <React.Fragment>
        <EvilIcons name={iconName} size={20}/>
        <Text style={globalStyles.pl5}>{text}</Text>
      </React.Fragment>
    )
  };

  render() {
    const {open, disabled, onToggle} = this.props;
    const disabledStyles = this.disabledStyles(disabled);

    return (
      <View style={[searchBarStyles.container]}>
        <View style={[searchBarStyles.searchBlock]}>
          <TouchableOpacity style={[searchBarStyles.searchButton]} onPress={() => onToggle(!open)}>
            {this.renderStatus(open)}
          </TouchableOpacity>
        </View>
        <View style={[searchBarStyles.resetBlock]}>
          <TouchableOpacity style={[searchBarStyles.resetButton, disabledStyles]} disabled={disabled}>
            <EvilIcons name='undo' size={20}/>
            <Text style={globalStyles.pl5}>Unset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SearchBar;