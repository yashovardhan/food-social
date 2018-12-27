import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  HeaderText: {
    fontFamily: 'poppins-regular',
    color: '#000000',
    fontSize: 22,
  },
  FormText: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    color: '#AFAFAF',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  Form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3D4E5',
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
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
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
  AuthCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 5,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});

export default styles;
