import React from 'react';
import _ from 'lodash';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import multiSelectStyles from './multi-select-styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {borders} from '../../styles/globalStyles';
import MultiSelectItem from './multi-select-item';

class MultiSelect extends React.Component {

  state = {
    popoverOpen: true,
    q: '',
    filtered: null
  };

  togglePopover = () => {
    const popoverOpen = this.state.popoverOpen;
    this.setState({popoverOpen: !popoverOpen});
  };

  itemSelected = (item, selected, identifier) => {
    return !!_.find(selected, (element) => element[identifier] === item[identifier]);
  };

  onFreeSearchChange = (q) => {
    const {data} = this.props;

    const filtered = data.filter((item) => item.label.toLowerCase().contains(q.toLowerCase()));

    this.setState({q: q, filtered: filtered});
  };

  renderFreeSearch = () => (
    <View style={multiSelectStyles.freeSearchBlock}>
      <EvilIcons name='search' size={25}/>
      <TextInput style={multiSelectStyles.freeSearch} underlineColorAndroid='transparent' placeholder="Search items"
                 onChangeText={this.onFreeSearchChange} value={this.state.q}/>
    </View>
  );

  renderPlaceholder = () => {
    const selectedCount = this.props.selected.length || 0;

    return (
      <View style={multiSelectStyles.placeholderBlock}>
        <Text style={[]}>Pick items ({selectedCount} selected)</Text>
        <EvilIcons name='chevron-down' size={25} style={[]}/>
      </View>
    );
  };

  renderItems = () => {
    const {onSelect, data, selected, identifier} = this.props;
    const items = this.state.filtered ? this.state.filtered : data;

    return (
      <View style={multiSelectStyles.itemContainer}>
        <FlatList data={items} extraData={selected} renderItem={({item}) =>
          <MultiSelectItem label={item.label} onSelect={() => onSelect(item)}
                           selected={this.itemSelected(item, selected, identifier)}/>}/>
      </View>
    )
  };

  renderInputBlock = () => {
    if (this.state.popoverOpen)
      return this.renderFreeSearch();
    return this.renderPlaceholder();
  };

  renderItemBlock = () => {
    if (this.state.popoverOpen)
      return this.renderItems();
  };

  render() {

    return (
      <View>
        <TouchableOpacity style={multiSelectStyles.container} onPress={this.togglePopover}>
          {this.renderInputBlock()}
        </TouchableOpacity>
        {this.renderItemBlock()}
      </View>
    );
  }
}

export default MultiSelect;