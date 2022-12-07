import { Image, SafeAreaView, Text } from 'react-native';
import { CardStyle } from '../assets/style/Card';

const Card = ({ title, image, description, key }) => {
  return (
    <SafeAreaView style={CardStyle.container} key={key}>
      {image && <Image source={image} style={CardStyle.cardImage} />}
      <Text style={CardStyle.text}>{title}</Text>
      <Text style={CardStyle.description}>{description}</Text>
    </SafeAreaView>
  );
};

export default Card;
