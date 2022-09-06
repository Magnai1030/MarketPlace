import CustomText, { Family } from '@components/custom/CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { CategoryItemI } from '@types';

import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

const CategoryItem: FC<CategoryItemI> = ({ element }) => {
    return (
        <View style={styles.container}>
            <CustomText
                color={Colors.blackColor}
                family={Family.REGULAR}
                size={Variables.smallTextSize}>
                {element.title}
            </CustomText>
            {element.isActive ? <View style={styles.localContainer} /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 33,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 7.5,
        paddingRight: 7.5,
    },
    localContainer: {
        flex: 1,
        width: '100%',
        height: 3,
        position: 'absolute',
        backgroundColor: Colors.primaryColor,
        bottom: 3,
    },
});

export default CategoryItem;
