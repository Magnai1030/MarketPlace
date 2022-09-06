import React, { createContext, useState } from 'react';
import AlertContainer from '@containers/AlertContainer';
import { AlertI } from '@types';

export type InitialValue = {
    alertData: AlertI[];
    pushAlertData: (alert: AlertI) => void;
};

export const AlertContext = createContext<InitialValue | null>(null);

export const AlertProvider: React.FC = ({ children }) => {
    const [alertData, setAlertData] = useState<AlertI[]>([]);

    const onPressClose = (index: number) => {
        const tempAlertData = JSON.parse(JSON.stringify(alertData)) as AlertI[];
        tempAlertData.splice(index, 1);
        setAlertData(tempAlertData);
    };

    const pushAlertData = (alert: AlertI) => {
        setAlertData([...alertData, alert]);
    };

    return (
        <AlertContext.Provider value={{ pushAlertData, alertData }}>
            {children}
            <AlertContainer alertData={alertData} onPressClose={onPressClose} />
        </AlertContext.Provider>
    );
};
