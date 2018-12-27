import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#000000',
  },
  Main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  BackArea: {
    height: 20,
    padding: 2,
    paddingLeft: 6,
    backgroundColor: '#000000',
  },
  BackIcon: {
    marginLeft: 2,
  },
  GraphicArea: {
    flex: 5,
  },
  Graphic: {
    width: '100%',
    height: '100%',
  },
  DetailsArea: {
    flex: 10,
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  RestaurantName: {
    fontFamily: 'poppins-medium',
    fontSize: 18,
  },
  OfferHeading: {
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'poppins-medium',
  },
  OfferType: {
    fontSize: 13,
    fontFamily: 'poppins-regular',
  },
  OfferDetails: {
    fontSize: 13,
    fontFamily: 'poppins-light',
  },
  NextButton: {
    backgroundColor: '#FF5F35',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  NextButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'poppins-light',
    fontSize: 15,
    color: '#FFFFFF',
  },
});

export default styles;
