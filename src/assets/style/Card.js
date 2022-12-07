import { StyleSheet } from 'react-native';

export const CardStyle = (StyleSheet.createStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    width: 'auto',
    backgroundColor: 'light-grey',
    borderRadius: '50%',
    marginVertical: '10px',
  },
  cardImage: {
    borderRadius: '50%',
    width: 100,
    height: 100,
  },
  text: {
    fontWeight: 'bold',
    height: '20px',
    textOverflow: 'auto',
  },
  description: {
    height: '50px',
  },
}));
