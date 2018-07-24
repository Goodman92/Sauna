import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  upperContainer: {
    marginTop: 10,
    paddingLeft:10
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  createButton: {
    width: 20,
  },
  introSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introLogoSection: {
    width: 125,
    flexDirection: 'column',
  },
  loginDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteCenter: {
    textAlign: 'center',
    color: '#fff'
  },
  textDivider: {
    flex: 2,
    textAlign: 'center',
    color: '#fff'
  },
  doubleLines: {
    flex: 3,
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    height: 3
  },
  singleLine: {
    flex: 5,
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 3
  },
  loginSection: {
    flex: 6,
    paddingLeft: 50,
    paddingRight: 50,
  },
  loginActionGroup: {
    marginTop: 40
  },
  facebookBlue: {
    backgroundColor: '#3b5998',
  },
});

export default loginStyles;

