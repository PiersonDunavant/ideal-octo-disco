import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import USNewsScreen from '../screens/USNewsScreen';
import WorldNewsScreen from '../screens/WorldNewsScreen';
import TechNewsScreen from '../screens/TechNewsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="US News" component={USNewsScreen} />
            <Tab.Screen name="World News" component={WorldNewsScreen} />
            <Tab.Screen name="Tech News" component={TechNewsScreen} />
        </Tab.Navigator>
    );
}