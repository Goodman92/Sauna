import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import filterItemStyles from './filter-item-styles';
import globalStyles from '../../styles/globalStyles';

class FilterItem extends React.Component {

  render() {
    const {name, style, selected, onSelect} = this.props;
    const selectedStyle = selected ? filterItemStyles.selected : null;

    return (
      <TouchableOpacity onPress={() => onSelect(!selected)}
                        style={[filterItemStyles.badge, selectedStyle, style]}>
        <Text> {name}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilterItem;