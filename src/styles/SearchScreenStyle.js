import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  GraphicArea: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Graphic: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  DetailsArea: {
    flex: 12,
    backgroundColor: '#F5F5F5',
    padding: 12,
  },
  FormHeading: {
    fontFamily: 'poppins-medium',
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 10,
  },
  Form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  FormIcon: {
    height: 20,
    width: 20,
  },
  FormInput: {
    flex: 10,
    marginTop: Platform.OS === 'android' ? 5 : 0,
    marginLeft: 15,
    height: 20,
    fontFamily: 'poppins-regular',
    fontSize: 15,
  },
  Card: {
    height: 120,
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  CardContent: {
    height: 90,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  CardProfile: {
    height: 65,
    position: 'absolute',
    margin: 10,
    marginLeft: -5,
  },
  CardButton: {
    height: 30,
    backgroundColor: '#FF5F35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'poppins-light',
    fontSize: 15,
    color: '#FFFFFF',
  },
  CardHeadings: {
    marginLeft: 80,
  },
  RestaurantName: {
    fontFamily: 'poppins-medium',
    fontSize: 17,
  },
  RestaurantDetails: {
    fontFamily: 'poppins-light',
    fontSize: 11,
    color: '#AFAFAF',
  },
});

export default styles;
