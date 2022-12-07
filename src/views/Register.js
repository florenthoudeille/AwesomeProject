import { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-web';
import { LoginStyles } from '../assets/style/LoginStyle';
import { checkEmail, checkPassword } from '../utils/regex';
import { storeData } from '../utils/localStorage';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const handleLogin = () => {
    checkEmail(email) &&
    checkPassword(firstPassword) &&
    firstPassword === secondPassword
      ? storeData('abc', email)
      : alert(`${email} ${firstPassword} ${secondPassword}`);
  };

  function goLogin() {
    navigation.navigate('Login');
  }

  return (
    // il vaut mieux utiliser SafeAreaView dans le container
    <SafeAreaView style={LoginStyles.container}>
      <Text style={LoginStyles.text}>Register</Text>
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Adresse email"
        keyboardType="default"
      />
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setFirstPassword}
        value={firstPassword}
        placeholder="Mot de passe"
        keyboardType="Password"
        secureTextEntry
      />
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setSecondPassword}
        value={secondPassword}
        placeholder="Répéter le mot de passe"
        keyboardType="Password"
        secureTextEntry
      />
      <TouchableOpacity style={LoginStyles.logButton} onPress={handleLogin}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginStyles.logButton} onPress={goLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
