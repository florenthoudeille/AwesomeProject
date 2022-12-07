import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views

import Login from './src/views/Login';
import Register from './src/views/Register';
import Home from './src/views/Home';
import Movies from './src/views/Movies';

// styles

import { LoginStyles } from './src/assets/style/LoginStyle';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={LoginStyles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <TouchableOpacity style={styles.button} onPress={alert("Hello world")}>
        <Text>Appuie ici</Text>
      </TouchableOpacity> */}
      {/* <StatusBar style="auto" /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Movies"
            component={Movies}
            options={{ animation: 'slide_from_bottom', headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ animation: 'slide_from_right', headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ animation: 'slide_from_right', headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ animation: 'slide_from_right', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
