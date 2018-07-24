import {StyleSheet} from 'react-native';

const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da'
  },
  searchBlock: {
    flex: 5,
    borderRightWidth: 0.5,
    borderColor: '#d6d7da',
    paddingTop: 10,
    paddingBottom: 10
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetBlock: {
    flex: 2,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  resetButtonText: {
    fontWeight: 'normal',
  },
});

export default searchBarStyles;