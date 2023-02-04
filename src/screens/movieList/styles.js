import { StyleSheet } from 'react-native';
export const movieStyle = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5
  },
  movieImage: {
    width: '90%',
    height: 200,
  },
  movieName: {
    padding: 8,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  container: {
    flex: 1
  },
  subContainer: {
    flex: 1
  },
  footer: {
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  recordNotFoud: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center'
  },
  recordNotFoudTitle: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  }
});
