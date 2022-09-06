import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

export enum Family {
    SEMIBOLD = 'NotoSans-SemiBold',
    REGULAR = 'NotoSans-Regular',
    LIGHT = 'NotoSans-Light',
    MEDIUM = 'NotoSans-Medium',
}

export type TypeProps = {
    size: number;
    family: Family;
    color: string;
    customStyle?: StyleProp<TextStyle>;
};

const CustomText: React.FC<TypeProps> = ({
    children,
    size,
    color,
    family,
    customStyle,
}) => {
    return (
        <Text
            style={[
                customStyle,
                { fontSize: size, fontFamily: family, color: color },
            ]}>
            {children}
        </Text>
    );
};

export default CustomText;
