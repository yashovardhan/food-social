import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  BackArea: {
    height: 16,
    padding: 2,
    backgroundColor: '#FFFFFF',
  },
  BackIcon: {
    marginLeft: 2,
  },
  GraphicArea: {
    flex: 4,
  },
  Graphic: {
    width: '100%',
    height: '100%',
  },
  DetailsArea: {
    flex: 6,
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
    flex: 1,
    backgroundColor: '#FF5F35',
    justifyContent: 'center',
    alignItems: 'center',
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
