import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-web';
import { LoginStyles } from '../assets/style/LoginStyle';
import { MoviesStyles } from '../assets/style/MoviesStyle';
import MovieCard from '../components/MovieCard';
import { getAllMovies } from '../service/fetchMovies';
import { useEffect, useState } from 'react';

const Movies = ({ navigation }) => {
  const [search, setSearch] = useState('a');
  const [movies, setMovies] = useState([]);

  // fetching

  // useEffect(() => {
  //   const url = `http://www.omdbapi.com/?apikey=9058ca7&/`;
  //   getAllMovies(url)
  //     .then((res) => {
  //       // console.log(res);
  //       res && setMovies(res);
  //     })
  //     .then(console.log(movies));
  // }, []);

  useEffect(() => {
    const urlSearch = `http://www.omdbapi.com/?apikey=9058ca7&s=${search}`;
    getAllMovies(urlSearch)
      .then((res) => {
        res && setMovies(res);
      })
      .then(console.log(movies));
  }, [search]);

  // Navigation

  // function goLogout() {
  //   setValue('isConnected', 'false');
  //   navigation.navigate('Register');
  // }

  // function goLogin() {
  //   navigation.navigate('Login');
  // }

  // function deleteLog() {
  //   navigation.navigate('Login');
  // }

  return (
    // il vaut mieux utiliser SafeAreaView dans le container
    <SafeAreaView style={LoginStyles.container}>
      <Text style={LoginStyles.text}>Films</Text>
      <TextInput
        style={LoginStyles.textInput}
        onChangeText={setSearch}
        value={search}
        placeholder="Rechercher un film"
        keyboardType="default"
      />
      <ScrollView style={LoginStyles.scrollView}>
        {movies &&
          movies.map((i) => {
            return (
              <MovieCard
                key={i.imdbID}
                src={i.Poster}
                title={i.Title}
                year={i.Year}
                type={i.Type}
              />
            );
          })}
      </ScrollView>
      {/* <TouchableOpacity style={LoginStyles.logButton} onPress={goLogin}>
        <Text>Revenir au login sans se déconnecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginStyles.logButton} onPress={goLogout}>
        <Text>Se déconnecter</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Movies;
