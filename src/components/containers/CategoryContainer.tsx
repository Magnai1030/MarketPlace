import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CategoryItem from '@items/CategoryItem';
import Colors from '@constants/Colors';

const CategoryContainer = () => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            horizontal>
            <View style={styles.itemContainer}>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
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
