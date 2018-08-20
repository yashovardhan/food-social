import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    height: '100%',
    backgroundColor: '#F5F5F5',
    zIndex: 0,
  },
  TopBack: {
    backgroundColor: '#FF5F35',
    flex: 2,
    borderWidth: 0,
    zIndex: 1,
  },
  BackImage: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.4,
    zIndex: 2,
  },
  MiddleBack: {
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    width: '11%',
    height: 50,
    transform: [{ scaleX: 10 }],
    alignSelf: 'center',
    zIndex: 1,
    top: -20,
  },
  BottomBack: {
    backgroundColor: '#F5F5F5',
    flex: 2,
    zIndex: 1,
  },
  Front: {
    height: '100%',
    zIndex: 3,
    top: '-100%',
  },
  AppIcon: {
    marginTop: 50,
    height: '12%',
    alignSelf: 'center',
  },
  Headings: {
    marginTop: 50,
    flexDirection: 'row',
  },
  LoginSelection: {
    marginLeft: 30,
    flex: 1,
  },
  SignupSelection: {
    marginRight: 30,
    flex: 1,
  },
  LoginSelectionText: {
    fontFamily: 'poppins-bold',
    fontSize: 20,
    color: 'rgba(256,256,256,0.56)',
  },
  SignupSelectionText: {
    fontFamily: 'poppins-bold',
    fontSize: 20,
    color: 'rgba(256,256,256,0.56)',
    textAlign: 'right',
  },
  AuthCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    height: 385,
    borderRadius: 5,
    shadowRadius: 0,
    shadowOpacity: 0,
    zIndex: 5,
  },
  SocialButtons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FacebookButton: {
    height: 50,
    width: 50,
  },
  GoogleButton: {
    marginLeft: 50,
    height: 50,
    width: 50,
  },
  LoginDivider: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  LoginDividerLine: {
    fontFamily: 'poppins-light',
    fontSize: 17,
    textAlign: 'center',
    color: '#979797',
  },
  LoginDividerText: {
    fontFamily: 'poppins-light',
    fontSize: 17,
    textAlign: 'center',
    color: '#000000',
  },
  Form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#D3D4E5',
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
    fontFamily: 'poppins-light',
    fontSize: 15,
  },
  Button: {
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 5,
    borderWidth: 0,
    padding: 12,
    backgroundColor: '#FF5F35',
  },
  ButtonText: {
    fontFamily: 'poppins-light',
    fontSize: 17,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  ForgotPass: {
    marginTop: 15,
  },
  ForgotPassText: {
    fontFamily: 'poppins-extralight',
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
  },
  ForgotPasswordCardText: {
    marginTop: 30,
    fontFamily: 'poppins-light',
    fontSize: 14,
    textAlign: 'center',
    color: '#979797',
  },
  ResetPasswordHeading: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ResetPasswordHeadingText: {
    fontFamily: 'poppins-light',
    fontSize: 16,
    marginLeft: 10,
    color: '#000000',
  },
  ResetPasswordSuccessCard: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ResetPasswordSuccessCardIcon: {
    height: '45%',
  },
  ResetPasswordSuccessCardText: {
    fontFamily: 'poppins-light',
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
  },
});

export default styles;
