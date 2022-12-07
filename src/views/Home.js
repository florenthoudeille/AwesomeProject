import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-web';
import { LoginStyles } from '../assets/style/LoginStyle';
import { removeValue, setValue } from '../utils/localStorage';
import Card from '../components/Card';
import toutoufou from '../assets/images/toutoufou.jpg';
import olddog from '../assets/images/olddog.jpg';
import { useEffect, useState } from 'react';
import { getDatas } from '../service/fetchUser';

const login = ({ navigation }) => {
  const [user, setUser] = useState([]);

  // fetching
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    // const getAllDatas = async () => {
    //   try {
    //     const data = await getDatas(url);
    //     console.log(data);
    //     setUser(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    getDatas(url)
      .then((res) => {
        // console.log(res);
        res && setUser(res);
      })
      .then(console.log(user));

    // getAllDatas();
  }, []);

  console.log(user);

  // Navigation

  function goLogout() {
    setValue('isConnected', 'false');
    navigation.navigate('Register');
  }

  function goLogin() {
    navigation.navigate('Login');
  }

  function deleteLog() {
    navigation.navigate('Login');
  }

  return (
    // il vaut mieux utiliser SafeAreaView dans le container
    <SafeAreaView style={LoginStyles.container}>
      <Text style={LoginStyles.text}>Welcome home, </Text>
      <ScrollView style={LoginStyles.scrollView}>
        {user &&
          user.map((i) => {
            return (
              <Card
                title={i.name}
                image={toutoufou}
                description={i.body}
                key={i.id}
              />
            );
          })}
      </ScrollView>
      <TouchableOpacity style={LoginStyles.logButton} onPress={goLogin}>
        <Text>Revenir au login sans se déconnecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginStyles.logButton} onPress={goLogout}>
        <Text>Se déconnecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default login;
