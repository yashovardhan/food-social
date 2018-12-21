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
  CardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  LeftCardFooterComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
  LeftCardFooterComponentText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: '#AFAFAF',
    marginLeft: 5,
  },
  ScrollDotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  RightCardFooterComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  ScrollDots: {
    height: 6,
    width: 6,
    backgroundColor: '#595959',
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default styles;
