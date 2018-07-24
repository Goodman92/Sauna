import React from 'react';
import _ from 'lodash';

import {Text, View} from 'react-native';

import SearchBar from './components/search-bar';
import SearchFilters from './components/search-filters';

import listSearchStyles from './list-search-styles';
import MultiSelect from '../../components/multi-select/multi-select';

class ListSearchScreen extends React.Component {
  state = {
    searchBarOpen: false,
    searchBarDisabled: true,
    items: [
      {label: 'First', id: 1, key: '1'},
      {label: 'Second', id: 2, key: '2'},
      {label: 'Third', id: 3, key: '3'},
    ],
    selected: [{id: 1}, {id: 3}]
  };

  //goes redux.
  onItemSelected = (item) => {
    let selected = this.state.selected.slice();
    const present = _.find(selected, (element) => element.id === item.id);

    if (present) {
      const indexOf = selected.indexOf(present);
      selected.splice(indexOf, 1);
    }
    else
      selected.push({id: item.id});

    this.setState({selected: selected});
  };


  render() {
    const {searchBarOpen, searchBarDisabled} = this.state;

    return (
      <View style={listSearchStyles.container}>
        <SearchBar open={searchBarOpen} disabled={searchBarDisabled}
                   onToggle={(searchBarOpen) => this.setState({searchBarOpen})}/>
        {searchBarOpen ? <SearchFilters style={listSearchStyles.filterContainer}/> : null}
        <MultiSelect data={this.state.items} selected={this.state.selected} identifier={'id'}
                     onSelect={this.onItemSelected}/>
      </View>
    );
  }
}

export default ListSearchScreen;