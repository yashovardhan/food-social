import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  Main: {
    marginTop: Platform.OS === 'android' ? 20 : 5,
  },
  Card: {
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
    borderWidth: 0,
    shadowOpacity: 0,
  },
  HeaderImage: {
    width: 40,
    height: 40,
  },
  CardHeader: {
    flexDirection: 'row',
  },
  HeaderText: {
    marginLeft: 12,
    flex: 5,
  },
  CardContent: {
    marginTop: 10,
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
