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
  HeadingArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  Heading: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    marginTop: 20,
  },
  SubHeading: {
    fontFamily: 'poppins-regular',
    fontSize: 13,
    color: '#AFAFAF',
  },
  MainArea: {
    flexGrow: 6,
  },
  ItemCard: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  ItemHeading: {
    fontFamily: 'poppins-light',
    fontSize: 13,
    paddingBottom: 5,
  },
  ItemFeedback: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  FeedbackIcon: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
  FeedbackIconSmall: {
    width: 40,
    height: 40,
    resizeMode: 'center',
  },
  ExperienceText: {
    flex: 2,
    padding: 12,
    height: 100,
    backgroundColor: '#DFDFDF',
    borderRadius: 5,
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,
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
