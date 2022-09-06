import React from 'react';
import Post from '@screens/Post';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PostStack = createNativeStackNavigator();

const PostTab = () => {
    return (
        <PostStack.Navigator>
            <PostStack.Screen
                name="Post"
                component={Post}
                options={{ headerShown: false }}
            />
        </PostStack.Navigator>
    );
};
export default PostTab;
