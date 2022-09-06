import React from 'react';
import Home from '@screens/Home';
import PostDetail from '@screens/PostDetail';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const HomeTab = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="PostDetail"
                component={PostDetail}
                options={() => ({
                    headerShown: false,
                })}
            />
        </HomeStack.Navigator>
    );
};
export default HomeTab;
