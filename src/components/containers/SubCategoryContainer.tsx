import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SubCategoryItem from '@items/SubCategoryItem';
import { SubCategoryItemI } from '@types';

import ShirtIcon from '@icons/category/ic_shirt.svg';
import Shirt2Icon from '@icons/category/ic_shirt2.svg';
import DressIcon from '@icons/category/ic_dress.svg';
import OutletIcon from '@icons/category/ic_outlet.svg';
import PajamaIcon from '@icons/category/ic_pajama.svg';
import WomanIcon from '@icons/category/ic_woman.svg';
import PantsIcon from '@icons/category/ic_pants.svg';

const SubCategoryContainer = () => {
    const subCategories: SubCategoryItemI[] = [
        {
            icon: ShirtIcon,
        },
        {
            icon: Shirt2Icon,
        },
        {
            icon: DressIcon,
        },
        {
            icon: OutletIcon,
        },
        {
            icon: PajamaIcon,
        },
        {
            icon: WomanIcon,
        },
        {
            icon: PantsIcon,
        },
    ];
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={styles.container}>
                {subCategories.map(element => (
                    <SubCategoryItem element={element} />
                ))}
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
