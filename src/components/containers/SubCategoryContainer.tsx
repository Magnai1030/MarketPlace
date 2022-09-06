import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SubCategoryItem from '@items/SubCategoryItem';

const SubCategoryContainer = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={styles.container}>
                <SubCategoryItem />
                <SubCategoryItem />
                <SubCategoryItem />
                <SubCategoryItem />
                <SubCategoryItem />
                <SubCategoryItem />
                <SubCategoryItem />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 7.5,
        paddingRight: 7.5,
    },
});

export default SubCategoryContainer;
