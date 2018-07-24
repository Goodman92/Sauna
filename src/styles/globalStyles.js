import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  centerize: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerizedRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  textCenter: {
    textAlign: 'center'
  },
  black: {
    color: '#000'
  },
  white: {
    color: '#fff'
  },
  mt10: {
    marginTop: 10,
  },
  mb10: {
    marginBottom: 10
  },
  mt5: {
    marginTop: 5,
  },
  mb5: {
    marginBottom: 5
  },
  ml40: {
    marginLeft: 40
  },
  mr40: {
    marginRight: 40
  },
  pl5: {
    paddingLeft: 5
  },
  bold: {
    fontWeight: 'bold'
  },
  h1: {
    fontSize: 48,
    letterSpacing: -1.5
  },
  h2: {
    fontSize: 34,
    letterSpacing: -0.5
  },
  h3: {
    fontSize: 24,
    letterSpacing: 0
  },
  h4: {
    fontSize: 20,
    letterSpacing: 0.25
  },
  disabled: {
    opacity: 0.5
  }
});

const genBorders = (givenColor) => {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  color = givenColor ? givenColor : color;

  return {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: color,
  }
};

export const borders = genBorders;
export default globalStyles;