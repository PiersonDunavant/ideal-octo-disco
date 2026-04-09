// Single news item card

import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NewsItem({ id, title, date, imageUrl }) {
  const navigation = useNavigation();

  function selectNewsHandler() {
    navigation.navigate('NewsDetail', { newsId: id });
  }

  return (
    <Pressable onPress={selectNewsHandler}>
      <View style={styles.item}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text>{date}</Text>
      </View>
    </Pressable>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  item: { margin: 10 },
  image: { width: '100%', height: 150 },
  title: { fontWeight: 'bold', fontSize: 16 },
});