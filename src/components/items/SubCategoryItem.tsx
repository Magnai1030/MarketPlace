import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const SubCategoryItem = () => {
    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Variables.mediumBorderRadius,
        ...Variables.shadow,
        marginLeft: 7.5,
        marginRight: 7.5,
        height: 44,
        width: 44,
    },
});

export default SubCategoryItem;
