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
  HeadText: {
    fontFamily: 'poppins-regular',
    color: '#000000',
    fontSize: 22,
  },
  Card: {
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
    borderWidth: 0,
    shadowOpacity: 0,
    padding: 0,
  },
  ImageScroller: {},
  HeaderImage: {
    width: 40,
    height: 40,
  },
  CardHeader: {
    flexDirection: 'row',
    padding: 10,
  },
  HeaderText: {
    marginLeft: 12,
    flex: 5,
  },
  CardContent: {
    marginTop: 10,
    padding: 10,
  },
  CardTitle: {
    fontFamily: 'poppins-medium',
    fontSize: 15,
    color: '#000000',
    flexDirection: 'row',
  },
  CardTime: {
    fontFamily: 'poppins-regular',
    fontSize: 10,
    color: '#AFAFAF',
  },
  CardContentHeading: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#000000',
  },
  CardContentText: {
    marginTop: 5,
    fontFamily: 'poppins-light',
    fontSize: 12,
    color: '#000000',
  },
  FlatList: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
