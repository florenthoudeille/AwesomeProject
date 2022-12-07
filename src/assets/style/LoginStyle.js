import { StyleSheet } from 'react-native';

export const LoginStyles = (StyleSheet.createStyle = StyleSheet.create({
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
  textInput: {
    width: 200,
    height: 30,
    border: '1px solid black',
    borderRadius: '5px',
    marginVertical: '5px',
    backgroundColor: 'white',
    paddingLeft: '5px',
  },
  logButton: {
    padding: '5px',
    backgroundColor: 'purple',
    width: '100px',
    textAlign: 'center',
    border: '1px solid pink',
    borderRadius: '10px',
  },
  button: {
    padding: '5px',
    border: '1px solid rgba(0,0,0,0.2)',
    backgroundColor: '#00d8ff',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    width: '80vw',
    height: '50%',
  },
}));
