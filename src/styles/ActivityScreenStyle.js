import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: Platform.OS === 'android' ? 20 : null,
  },
  HeaderText: {
    fontFamily: 'poppins-regular',
    color: '#000000',
    fontSize: 22,
  },
  Card: {
    margin: 0,
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  CardProfilePic: {
    width: 40,
    height: 40,
  },
  CardBackgroundImage: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  CardHeader: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0,
    shadowOpacity: 0,
  },
  CardHeaderContainer: {
    marginLeft: 10,
    marginTop: 15,
    marginRight: 10,
    marginBottom: 15,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  CardBody: {
    height: 125,
    margin: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  CardBodyContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  CardBodyGradient: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  CardBodyContent: {
    fontFamily: 'poppins-regular',
    fontSize: 15,
    color: '#FFFFFF',
    marginLeft: 15,
    marginRight: 30,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  CardBodySeparator: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 100,
    borderColor: '#FFFFFF',
  },
  CardBodyHeading: {
    fontFamily: 'poppins-regular',
    fontSize: 30,
    color: '#FFFFFF',
    marginLeft: 30,
    marginRight: 15,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  CardContent: {
    marginLeft: 12,
    flex: 5,
  },
  CardHeading: {
    fontFamily: 'poppins-regular',
    fontSize: 15,
    color: '#000000',
    flexDirection: 'row',
  },
  CardExpiryDate: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#AFAFAF',
  },
  FlatList: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
