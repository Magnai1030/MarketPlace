/**
 * @format
 */
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { AlertProvider, UserProvider } from './src/providers';
import NetworkModal from '@modals/NetworkModal';

const Parent = () => {
    LogBox.ignoreAllLogs(true);
    return (
        <AlertProvider>
            <UserProvider>
                <App />
            </UserProvider>
            <NetworkModal />
        </AlertProvider>
    );
};

AppRegistry.registerComponent(appName, () => Parent);
