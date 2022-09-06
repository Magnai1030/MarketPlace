import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Screen, { ScreenType } from '@custom/Screen';
import ProductContainer from '@containers/ProductContainer';
import SearchContainer from '@containers/SearchContainer';
import TopBar, { TopBarType } from '@layouts/TopBar';
import CategoryContainer from '@containers/CategoryContainer';
import SubCategoryContainer from '@containers/SubCategoryContainer';

const Result = () => {
    const [data, setData] = useState([
        {
            type: 'normal',
            items: [
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
            ],
        },
        {
            type: 'abnormal',
            abnormalIndex: 0,
            items: [{ price: 12000 }, { price: 12000 }, { price: 12000 }],
        },
        {
            type: 'normal',
            items: [
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
                { price: 12000 },
            ],
        },
        {
            type: 'abnormal',
            abnormalIndex: 1,
            items: [{ price: 12000 }, { price: 12000 }, { price: 12000 }],
        },

        {
            type: 'normal',
            items: [{}, {}, {}],
        },
    ]);
    return (
        <Screen scroll={ScreenType.NOTSCROLLABLE}>
            <TopBar type={TopBarType.BACK} title={'Test'} />
            <SearchContainer isRound={false} isFilter={true} />
            <CategoryContainer />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.itemContainer}>
                    <SubCategoryContainer />
                    <ProductContainer datas={data} />
                </View>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flex: 1,
        paddingBottom: 45,
    },
});

export default Result;
