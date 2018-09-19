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
    justifyContent: 'flex-end',
  },
  Graphic: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  DetailsArea: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    flex: 6,
  },
  Name: {
    fontFamily: 'poppins-bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 10,
    marginLeft: 20,
  },
  Heading: {
    fontSize: 13,
    fontFamily: 'poppins-light',
    color: '#AFAFAF',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
  },
  Description: {
    fontSize: 16,
    fontFamily: 'poppins-regular',
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 20,
  },
  EditButton: {
    backgroundColor: '#FF5F35',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    width: 54,
    borderRadius: 54,
    marginTop: -27,
    alignSelf: 'flex-end',
    marginRight: 27,
  },
  UpvoteSection: {
    flexDirection: 'row',
    margin: 10,
    borderColor: '#AFAFAF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
  },
  UpvoteButton: {
    backgroundColor: '#50E3C2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
    borderRadius: 36,
    marginLeft: 0,
  },
  Upvotes: {
    fontSize: 16,
    fontFamily: 'poppins-medium',
    marginLeft: 10,
    marginRight: 20,
  },
  LogoutButton: {
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
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
});

export default styles;
