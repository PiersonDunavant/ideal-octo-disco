import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function NewsItem({ item, onSelect }) {
    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={{ margin: 10 }}>
                <Image source={{ uri: item.imageUrl }} style={{ height: 150 }} />
                <Text>{item.headline}</Text>
                <Text>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );
}