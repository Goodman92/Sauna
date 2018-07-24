import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FilterItem from '../../../components/filter-item/filter-item';

import searchFilterStyles from './search-filters-styles';
import globalStyles from '../../../styles/globalStyles';

class SearchFilters extends React.Component {

  filterOnSelect = (item, value) => {

  };

  render() {
    const {style} = this.props;

    return (
      <View style={style}>
        <View style={searchFilterStyles.outerFilterBlock}>
          <Text style={globalStyles.bold}>Stove type</Text>
          <View style={searchFilterStyles.innerFilterBlock}>
            <FilterItem name={'Electric'} selected={true} onSelect={() => this.filterOnSelect('')}/>
            <FilterItem name={'Wood'} selected={true} onSelect={() => this.filterOnSelect('')}/>
            <FilterItem name={'Gas'} selected={true} onSelect={() => this.filterOnSelect('')}/>
          </View>
        </View>
        <View style={searchFilterStyles.outerFilterBlock}>
          <Text style={globalStyles.bold}>Stove type</Text>
          <View style={searchFilterStyles.innerFilterBlock}>
            <FilterItem name={'Electric'} selected={true} onSelect={() => this.filterOnSelect('')}/>
            <FilterItem name={'Wood'} selected={true} onSelect={() => this.filterOnSelect('')}/>
            <FilterItem name={'Gas'} selected={true} onSelect={() => this.filterOnSelect('')}/>
          </View>
        </View>
      </View>
    );
  }
}

export default SearchFilters;