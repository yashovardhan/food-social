import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  BackButton: {
    height: 16,
    padding: 2,
    backgroundColor: 'transparent',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
  BackIcon: {
    marginLeft: 2,
  },
  MainArea: {
    flex: 6,
  },
  RestaurantName: {
    fontFamily: 'poppins-medium',
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
    zIndex: 2,
  },
  RestaurantAddress: {
    fontFamily: 'poppins-regular',
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    zIndex: 2,
  },
  CardPoints: {
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    paddingRight: 10,
    paddingLeft: 10,
    borderStyle: 'dotted',
    borderColor: '#F8E71C',
    zIndex: 2,
    width: 'auto',
    alignSelf: 'center',
    marginTop: 10,
  },
  CardPointsText: {
    textAlign: 'center',
    fontFamily: 'poppins-regular',
    fontSize: 22,
    color: '#FFBB0D',
    flex: 1,
    zIndex: 2,
  },
  Coupon: {
    flexDirection: 'row',
    height: 90,
    margin: 20,
    marginTop: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  CouponContent: {
    flex: 2,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#FFFFFF',
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CouponBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  CouponContentGraphic: {
    flex: 1,
    margin: 10,
  },
  CouponContentText: {
    flex: 2,
    fontFamily: 'poppins-medium',
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'left',
    margin: 10,
  },
  CouponPoints: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CouponPointsText: {
    fontFamily: 'poppins-regular',
    color: '#FFFFFF',
    fontSize: 28,
    textAlign: 'center',
  },
});

export default styles;
