// Detail screen + bookmark toggle (SAFE VERSION)

import { View, Text, Image, StyleSheet } from 'react-native';
import { NEWS } from '../data/dummy-data';
import { useContext, useLayoutEffect } from 'react';
import { BookmarksContext } from '../store/context/bookmark-context';
import IconButton from '../components/IconButton';

function NewsDetailScreen({ route, navigation }) {

  // Get ID safely
  const newsId = route?.params?.newsId;

  // Find selected item
  const selected = NEWS.find((item) => item.id === newsId);

  // 🚨 SAFETY CHECK (prevents crash)
  if (!selected) {
    return (
      <View>
        <Text>News not found</Text>
      </View>
    );
  }

  const bookmarksCtx = useContext(BookmarksContext);
  const isBookmarked = bookmarksCtx.ids.includes(newsId);

  function toggleBookmark() {
    if (isBookmarked) {
      bookmarksCtx.removeBookmark(newsId);
    } else {
      bookmarksCtx.addBookmark(newsId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isBookmarked ? 'bookmark' : 'bookmark-outline'}
          color="white"
          onPress={toggleBookmark}
        />
      ),
    });
  }, [navigation, isBookmarked]);

  return (
    <View>
      <Image source={{ uri: selected.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selected.title}</Text>
      <Text>{selected.date}</Text>
      <Text>{selected.author}</Text>
      <Text>{selected.agency}</Text>
      <Text>{selected.description}</Text>
    </View>
  );
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
  image: { width: '100%', height: 200 },
  title: { fontSize: 20, fontWeight: 'bold' },
});