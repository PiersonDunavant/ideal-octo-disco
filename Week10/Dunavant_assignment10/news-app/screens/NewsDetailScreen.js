import React from 'react';
import { View, Text, Image } from 'react-native';
import { NEWS } from '../data/dummy-data';
import BookmarkButton from '../components/BookmarkButton';

export default function NewsDetailScreen({ route, navigation }) {

    const newsItem = NEWS.find(n => n.id === route.params.newsId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <BookmarkButton />
        });
    }, []);

    return (
        <View>
            <Image source={{ uri: newsItem.imageUrl }} style={{ height: 200 }} />
            <Text>{newsItem.headline}</Text>
            <Text>{newsItem.date}</Text>
            <Text>{newsItem.author}</Text>
            <Text>{newsItem.agency}</Text>
            <Text>{newsItem.description}</Text>
        </View>
    );
}