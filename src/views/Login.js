import { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-web';
import { LoginStyles } from '../assets/style/LoginStyle';
import { checkEmail, checkPassword } from '../utils/regex';
import { getData, storeData } from '../utils/localStorage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('@gmail.com');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    checkEmail(email) && checkPassword(password)
      ? storeData('isConnected', 'true').then((res) => {
          navigation.navigate('Home');
        })
      : alert('login rejected');
  };

  function goRegister() {
    navigation.navigate('Register');
  }

  const token = getData('isConnected').then((res) => {
    if (res) {
      console.log(res);
    }
  });

  if (token === 'true') {
    navigation.navigate('Register');
  }

  return (
    // il vaut mieux utiliser SafeAreaView dans le container
    <SafeAreaView style={LoginStyles.container}>
      <Text style={LoginStyles.text}>Login</Text>
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Adresse email"
        keyboardType="default"
      />
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Mot de passe"
        keyboardType="Password"
        secureTextEntry
      />
      <TouchableOpacity style={LoginStyles.logButton} onPress={handleLogin}>
        <Text>Se logger</Text>
      </TouchableOpacity>

      <TouchableOpacity style={LoginStyles.logButton} onPress={goRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
