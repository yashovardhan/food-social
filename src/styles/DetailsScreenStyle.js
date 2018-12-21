import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    height: 200,
  },
  Graphic: {
    width: '100%',
    height: '100%',
  },
  DetailsArea: {
    height: 'auto',
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  RestaurantName: {
    fontFamily: 'poppins-bold',
    fontSize: 18,
  },
  OfferHeading: {
    marginTop: 5,
    fontSize: 13,
    fontFamily: 'poppins-medium',
  },
  OfferDetails: {
    fontSize: 13,
    fontFamily: 'poppins-light',
  },
  RestaurantDescription: {
    fontSize: 11,
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
    fontFamily: 'poppins-regular',
    fontSize: 15,
    color: '#FFFFFF',
  },
  MenuButton: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    padding: 4,
    paddingLeft: 28,
    paddingRight: 28,
    borderColor: '#FF5F35',
    backgroundColor: '#FFFFFF',
    width: 'auto',
  },
  MenuButtonText: {
    fontFamily: 'poppins-light',
    fontSize: 13,
    textAlign: 'center',
    color: '#FF5F35',
  },
});

export default styles;
