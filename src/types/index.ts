import React from 'react';
import Colors from '@constants/Colors';

export type ChildProps = {
    children: React.ReactNode;
};

export interface Product {
    price?: number;
}

export interface QAItemI {
    title: string;
    description: string;
}

export interface TableItemI {
    title: string;
    detail: string;
}

export enum AlertType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
}

export const ALERTBACKGROUNDCOLOR: { [key in AlertType]: string } = {
    SUCCESS: Colors.hightOpacityInfoColor,
    ERROR: Colors.hightOpacityErrorColor,
    WARNING: Colors.hightOpacityWarningColor,
};

export const ALERTBORDERCOLOR: { [key in AlertType]: string } = {
    SUCCESS: Colors.infoColor,
    ERROR: Colors.errorColor,
    WARNING: Colors.warningColor,
};

export interface AlertI {
    title: string;
    type: AlertType;
}

export interface TagItemI {
    title: string;
}

export interface UserI {
    firstname: string;
    lastname: string;
    email: string;
    token: string;
    phone: string;
}
