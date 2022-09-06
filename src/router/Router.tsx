import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostButton from '@layouts/PostButton';
import Home from '@screens/Home';

import SearchTab from '@layouts/SearchTab';
import FavouriteTab from '@layouts/FavouriteTab';
import PostTab from '@layouts/PostTab';
import ProfileTab from '@layouts/ProfileTab';

import HomeIcon from '@icons/ic_home.svg';
import HomeActiveIcon from '@icons/ic_home_active.svg';

import SearchIcon from '@icons/ic_search.svg';
import SearchActiveIcon from '@icons/ic_search_active.svg';

import PostIcon from '@icons/ic_post.svg';
import PostActiveIcon from '@icons/ic_post_active.svg';

import FavouriteIcon from '@icons/ic_favourite.svg';
import FavouriteActiveIcon from '@icons/ic_favourite_active.svg';

import ProfileIcon from '@icons/ic_profile.svg';
import ProfileActiveIcon from '@icons/ic_profile_active.svg';

import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import PostDetail from '@screens/PostDetail';

const Tab = createBottomTabNavigator();

const TabRouter = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.container,
                tabBarItemStyle: styles.itemStyle,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) =>
                        focused ? <HomeActiveIcon /> : <HomeIcon />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchTab}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) =>
                        focused ? <SearchActiveIcon /> : <SearchIcon />,
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostTab}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) =>
                        focused ? <PostActiveIcon /> : <PostIcon />,
                    tabBarButton: ({ children, onPress }) => (
                        <PostButton children={children} onPress={onPress} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={FavouriteTab}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) =>
                        focused ? <FavouriteActiveIcon /> : <FavouriteIcon />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileTab}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }: { focused: boolean }) =>
                        focused ? <ProfileActiveIcon /> : <ProfileIcon />,
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabRouter"
                component={TabRouter}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetail}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        borderRadius: 10,
        bottom: 20,
        left: 10,
        right: 10,
        backgroundColor: Colors.regularNeutralColor,
        ...Variables.shadow,
        height: 55,
    },
    itemStyle: {
        height: 55,
        width: 55,
    },
});

export default Router;
