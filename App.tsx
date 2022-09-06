import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import SplashScreen from 'react-native-splash-screen';
import { Host } from 'react-native-portalize';
import Router from './src/router/Router';

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'http://138.3.217.184:3000/graphql',
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

const App = () => {
    const [loadingCache, setLoadingCache] = useState(true);
    useEffect(() => {
        const start = async () => {
            await persistCache({
                cache,
                storage: new AsyncStorageWrapper(AsyncStorage),
            }).then(() => setLoadingCache(false));
            SplashScreen.hide();
        };
        start();
    }, []);
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ApolloProvider client={client}>
                <NavigationContainer>
                    <Host>
                        <Router />
                    </Host>
                </NavigationContainer>
            </ApolloProvider>
        </GestureHandlerRootView>
    );
};
export default App;
