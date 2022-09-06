import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';

const TopContainer: React.FC = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        padding: 15,
    },
    innerContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: Colors.regularNeutralColor,
        borderRadius: Variables.mediumBorderRadius,
    },
});

export default TopContainer;
