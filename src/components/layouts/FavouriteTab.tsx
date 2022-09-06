import React from 'react';
import Home from '@screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FavouriteStack = createNativeStackNavigator();

const FavouriteTab = () => {
    return (
        <FavouriteStack.Navigator>
            <FavouriteStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </FavouriteStack.Navigator>
    );
};
export default FavouriteTab;
