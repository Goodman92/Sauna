import React from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import multiSelectStyles from './multi-select-styles';
import Feather from 'react-native-vector-icons/Feather';
import globalStyles from '../../styles/globalStyles';

export default MultiSelectItem = (props) => {
  const {label, selected, onSelect} = props;

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={multiSelectStyles.placeholderBlock}>
        <Text>{label}</Text>
        {selected ? <Feather name='check' size={15} style={[]}/> : null}
      </View>
    </TouchableOpacity>
  )
};