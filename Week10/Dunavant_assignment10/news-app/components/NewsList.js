import React from 'react';
import { FlatList } from 'react-native';
import NewsItem from './NewsItem';

export default function NewsList({ data, navigation }) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <NewsItem
                    item={item}
                    onSelect={() =>
                        navigation.navigate('NewsDetail', { newsId: item.id })
                    }
                />
            )}
        />
    );
}