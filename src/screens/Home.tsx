import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Screen, { ScreenType } from '@custom/Screen';
import { gql, useQuery } from '@apollo/client';
import ProductContainer from '@containers/ProductContainer';
import { Product } from '@items/ProductItem';
import SearchContainer from '@containers/SearchContainer';
import CategoryContainer from '@containers/CategoryContainer';
import SubCategoryContainer from '@containers/SubCategoryContainer';

const CHAPTERS_QUERY = gql`
    query Chapters {
        categories {
            id
        }
    }
`;

const Home = () => {
    const { data, loading } = useQuery(CHAPTERS_QUERY);
    const [localData, setData] = useState<any>([]);
    useEffect(() => {
        setData([
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
                items: [
                    { price: 12000 },
                    { price: 12000 },
                    { price: 12000, isSoldOut: true },
                ],
            },
            {
                type: 'normal',
                items: [
                    { price: 12000 },
                    { price: 12000 },
                    { price: 12000 },
                    { price: 12000 },
                    { price: 12000 },
                    { price: 12000, isSoldOut: true },
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
    }, []);
    return (
        <Screen scroll={ScreenType.NOTSCROLLABLE}>
            <SearchContainer isRound={false} />
            <CategoryContainer />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.itemContainer}>
                    <SubCategoryContainer />
                    <ProductContainer datas={localData} />
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

export default Home;
