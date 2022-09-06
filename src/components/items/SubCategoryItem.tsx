import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { SubCategoryItemI } from '@types';

type CategoryProps = {
    element: SubCategoryItemI;
};

const SubCategoryItem: FC<CategoryProps> = ({ element }) => {
    return <View style={styles.container}>{<element.icon />}</View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Variables.mediumBorderRadius,
        ...Variables.shadow,
        marginLeft: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7.5,
        height: 44,
        width: 44,
    },
});

export default SubCategoryItem;
