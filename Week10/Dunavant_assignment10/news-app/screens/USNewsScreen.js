import React from 'react';
import { NEWS } from '../data/dummy-data';
import NewsList from '../components/NewsList';

export default function USNewsScreen({ navigation }) {
    return (
        <NewsList
            data={NEWS.filter(n => n.category === 'us')}
            navigation={navigation}
        />
    );
}