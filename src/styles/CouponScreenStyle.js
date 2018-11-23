import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Graphic: {
    alignSelf: 'center',
  },
  Coupon: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
  },
  CouponText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'poppins-medium',
    fontSize: 28,
    color: '#FFFFFF',
  },
  CouponDetails: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'poppins-medium',
    fontSize: 28,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    marginTop: 28,
  },
  CouponInstructions: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'poppins-medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 28,
  },
});

export default styles;
