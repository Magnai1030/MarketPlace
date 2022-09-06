import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import ProductItem, { Product } from '@items/ProductItem';
import ProductSkeleton from '@skeletons/ProductSkeleton';

export type ContainerProps = {
    datas: any;
};

const ProductContainer: React.FC<ContainerProps> = ({ datas }) => {
    const navigation = useContext(NavigationContext);
    const onPressItem = () => {
        navigation?.navigate('PostDetail');
    };
    const renderItems = (items: Product[]) => {
        return (
            <View style={styles.innerContainer}>
                {items.map((secondData: Product, subIndex: number) => {
                    return secondData.price ? (
                        <ProductItem
                            key={subIndex}
                            details={secondData}
                            onPressItem={onPressItem}
                        />
                    ) : (
                        <ProductSkeleton key={subIndex} />
                    );
                })}
            </View>
        );
    };
    const renderCustomItems = (items: any, abnormalIndex: number) => {
        return (
            <View
                style={[
                    styles.customContainer,
                    { flexDirection: abnormalIndex ? 'row' : 'row-reverse' },
                ]}>
                <View
                    style={[
                        styles.customRowContainer,
                        {
                            marginLeft: abnormalIndex ? 0 : 5,
                            marginRight: abnormalIndex ? 5 : 0,
                        },
                    ]}>
                    <ProductItem
                        details={items[0]}
                        isAbnormal={false}
                        onPressItem={onPressItem}
                    />
                    <ProductItem
                        details={items[1]}
                        isAbnormal={false}
                        onPressItem={onPressItem}
                    />
                </View>
                <ProductItem
                    details={items[2]}
                    isAbnormal={true}
                    onPressItem={onPressItem}
                />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            {datas.map((firstData: any, index: number) => {
                return firstData.type === 'normal'
                    ? renderItems(firstData.items as Product[])
                    : renderCustomItems(
                          firstData.items,
                          firstData.abnormalIndex,
                      );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    innerContainer: {
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
    },
    customContainer: {
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5,
    },
    customRowContainer: {
        flexDirection: 'column',
    },
});

export default ProductContainer;
