import { Image, SafeAreaView, View, Text } from 'react-native';
import { MoviesStyles } from '../assets/style/MoviesStyle';

const MovieCard = ({ key, src, title, year, type }) => {
  return (
    <SafeAreaView key={key} style={MoviesStyles.card}>
      <View style={MoviesStyles.imageCard}>
        <Image source={{ uri: src }} style={MoviesStyles.img} />
      </View>
      <View style={MoviesStyles.descriptionCard}>
        <Text style={MoviesStyles.title}>{title.toUpperCase()}</Text>
        <Text>Année de sortie : {year}</Text>
        <Text>Catégorie : {type === 'movie' && 'Film'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieCard;
