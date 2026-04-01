import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BookmarkButton() {
    const [saved, setSaved] = useState(false);

    return (
        <TouchableOpacity onPress={() => setSaved(!saved)}>
            <Text>{saved ? '🔖' : '📑'}</Text>
        </TouchableOpacity>
    );
}