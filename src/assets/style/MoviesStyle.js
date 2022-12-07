import { StyleSheet } from 'react-native';

export const MoviesStyles = (StyleSheet.createStyle = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    width: '200px',
    borderBottomRightRadius: '100px',
    border: '3px dashed rgba(0,0,0,0.5)',
    marginVertical: '5px',
  },
  imageCard: { height: '65%', width: '100%' },
  descriptionCard: {
    height: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: '10px',
  },
  title: {
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '50%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: 'black',
  },
}));
