// Shows bookmarked news

import { useContext } from 'react';
import { View, Text } from 'react-native';
import { BookmarksContext } from '../store/context/bookmark-context';
import { NEWS } from '../data/dummy-data';
import NewsList from '../components/NewsList';

function BookmarksScreen() {
  const bookmarksCtx = useContext(BookmarksContext);

  const bookmarked = NEWS.filter((item) =>
    bookmarksCtx.ids.includes(item.id)
  );

  if (bookmarked.length === 0) {
    return (
      <View>
        <Text>No bookmarks yet.</Text>
      </View>
    );
  }

  return <NewsList items={bookmarked} />;
}

export default BookmarksScreen;