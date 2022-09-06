import React from 'react';
import Search from '@screens/Search';
import Category from '@screens/Category';
import Result from '@screens/Result';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchStack = createNativeStackNavigator();

const SearchTab = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen
                name="Category"
                component={Category}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen
                name="Result"
                component={Result}
                options={{ headerShown: false }}
            />
        </SearchStack.Navigator>
    );
};
export default SearchTab;
