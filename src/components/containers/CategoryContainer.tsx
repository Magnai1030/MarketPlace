import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CategoryItem from '@items/CategoryItem';

import Colors from '@constants/Colors';

const CategoryContainer = () => {
    const categories = [
        {
            title: 'Computer',
            isActive: false,
        },
        {
            title: 'Clothes',
            isActive: true,
        },
        {
            title: 'Electronics',
            isActive: false,
        },
        {
            title: 'Accesories',
            isActive: false,
        },
        {
            title: 'Book',
            isActive: false,
        },
        {
            title: 'Supplements',
            isActive: false,
        },
        {
            title: 'Other',
            isActive: false,
        },
    ];
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            horizontal>
            <View style={styles.itemContainer}>
                {categories.map(element => (
                    <CategoryItem element={element} />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.whiteColor,
    },
    itemContainer: {
        width: '100%',
        height: 35,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 7.5,
        paddingRight: 7.5,
    },
});

export default CategoryContainer;
