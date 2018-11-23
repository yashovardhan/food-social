import { StyleSheet } from 'react-native';

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
  Card: {
    marginLeft: 15,
    marginTop: 5,
    marginRight: 15,
    marginBottom: 5,
    borderWidth: 0,
    borderRadius: 5,
    shadowOpacity: 0,
  },
  CardImage: {
    width: 40,
    height: 40,
  },
  CardContent: {
    marginLeft: 12,
    flex: 5,
  },
  CardHeading: {
    fontFamily: 'poppins-regular',
    fontSize: 15,
    color: '#000000',
    flexDirection: 'row',
  },
  CardTime: {
    marginTop: 10,
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#AFAFAF',
  },
  FlatList: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
