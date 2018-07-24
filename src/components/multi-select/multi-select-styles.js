import {StyleSheet} from 'react-native';

const multiSelectStyles = StyleSheet.create({
  container: {
    borderColor: '#0e14190d',
    borderWidth: 1,
    backgroundColor: '#6a7f940d',
    height: 35
  },
  freeSearchBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholderBlock: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  freeSearch: {
    flex: 1,
    margin: 0,
    padding: 0
  },
  itemContainer: {
    borderColor: '#0e14190d',
    borderWidth: 1,
    backgroundColor: '#6a7f940d',
  }
});

export default multiSelectStyles;