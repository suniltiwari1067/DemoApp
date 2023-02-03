import {StyleSheet} from 'react-native';
export const movieStyle = StyleSheet.create({
  safeAreaStyle: {flex: 1},
  flatlistContainer: {paddingHorizontal: 10},
  catHeading: {
    alignSelf: 'center',
    textAlign: 'left',
    width: '100%',
  },
  backBtn: {height: 30, width: 30, opacity: 0.9},
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  imageStyle: {
    width: '90%',
    height: 200,
  },
  shimImageStyle: {
    width: '90%',
    height: 200,
  },
  productName: {
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  shimProductName: {
    width: '90%',
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  imageDetail: {
    height: 250,
    width: '60%',
  },
  productDetail: {
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailContainer: {
    flex: 1,
    margin: 5,
    fontSize: 16,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleDetail: {},
});
