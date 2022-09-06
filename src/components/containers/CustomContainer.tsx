import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText, { Family } from '@custom/CustomText';

export type CustomProps = {
    title: string;
    type: Family;
};

const CustomContainer: React.FC<CustomProps> = ({ children, title, type }) => {
    return (
        <View style={styles.container}>
            <CustomText
                size={Variables.mediumTextSize}
                color={Colors.blackColor}
                family={type}
                customStyle={styles.titleStyle}>
                {title}
            </CustomText>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingTop: 30,
    },
    titleStyle: {
        marginBottom: 10,
    },
});

export default CustomContainer;
