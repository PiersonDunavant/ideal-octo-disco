// Displays list of news

import { FlatList } from 'react-native';
import NewsItem from './NewsItem';

function NewsList({ items }) {
  function renderItem(itemData) {
    return <NewsItem {...itemData.item} />;
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default NewsList;