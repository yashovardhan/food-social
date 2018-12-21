import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
  HeadingArea: {
    flex: 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  HeadingBackground: {
    height: '100%',
    width: width / 2,
    alignSelf: 'center',
    borderBottomRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
    transform: [{ scaleX: 3 }],
    overflow: 'hidden',
    position: 'absolute',
  },
  Offer: {
    flexDirection: 'row',
    width: 'auto',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  OfferGraphic: {
    alignSelf: 'flex-end',
    width: 'auto',
  },
  OfferText: {
    width: 'auto',
    fontFamily: 'poppins-medium',
    color: '#FFFFFF',
    fontSize: 25,
    textAlign: 'left',
    marginLeft: 10,
    alignSelf: 'flex-end',
  },
  Points: {
    width: 'auto',
    alignItems: 'flex-start',
    flex: 1,
  },
  PointsText: {
    fontFamily: 'poppins-regular',
    color: '#FFFFFF',
    fontSize: 28,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  MainArea: {
    flex: 6,
    padding: 15,
  },
  TnC: {
    fontFamily: 'poppins-regular',
    color: '#000000',
    fontSize: 17,
  },
  TnCLines: {
    fontFamily: 'poppins-light',
    color: '#000000',
    fontSize: 14,
  },
});

export default styles;
