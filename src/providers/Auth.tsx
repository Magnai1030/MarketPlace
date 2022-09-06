import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserI } from '@types/';

type UserProps = {
    userData: UserI | null;
    setUserData: (user: UserI) => void;
};

const STORAGE_KEY = 'CREDENTIALS';

export const UserContext = createContext<UserProps | null>(null);

export const UserProvider: React.FC = ({ children }) => {
    const [userData, setUserData] = useState<UserI | null>(null);

    useEffect(() => {
        const getUserData = async () => {
            const response = await AsyncStorage.getItem(STORAGE_KEY);
            setUserData(response !== null ? JSON.parse(response) : null);
        };
        getUserData();
    }, []);

    useEffect(() => {
        const updateUserData = async () => {
            const jsonVal = JSON.stringify(userData);
            await AsyncStorage.setItem(STORAGE_KEY, jsonVal);
        };
        updateUserData();
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};
