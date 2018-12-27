import { StyleSheet, Platform } from 'react-native';

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
  MainArea: {
    flexGrow: 6,
    margin: 20,
  },
  Profile: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  ProfileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 0,
  },
  ProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  EditPhotoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  EditPhoto: {
    fontFamily: 'poppins-medium',
    fontSize: 15,
    color: '#30C5A4',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#D3D4E5',
  },
  FormText: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#AFAFAF',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  FormInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 5 : 0,
    height: 20,
    fontFamily: 'poppins-regular',
    fontSize: 15,
  },
  LogoutButton: {
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    borderColor: '#FF5F35',
    backgroundColor: '#FFFFFF',
  },
  LogoutButtonText: {
    fontFamily: 'poppins-light',
    fontSize: 17,
    textAlign: 'center',
    color: '#FF5F35',
  },
  SubmitButton: {
    backgroundColor: '#FF5F35',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  SubmitButtonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'poppins-light',
    fontSize: 15,
    color: '#FFFFFF',
  },
});

export default styles;
