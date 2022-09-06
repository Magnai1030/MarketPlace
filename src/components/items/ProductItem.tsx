import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import HeartIcon from '@icons/ic_heart.svg';
import FastImage from 'react-native-fast-image';
import CustomText, { Family } from '@custom/CustomText';
import { FormatCurrency } from '@services/Helper';
import { Product } from '@types';

const ProductItem: React.FC<{
    details: Product;
    isAbnormal?: boolean;
    onPressItem: () => void;
}> = ({ details, isAbnormal, onPressItem }) => {
    return (
        <Pressable
            style={[
                styles.container,
                {
                    width: isAbnormal
                        ? Variables.twoInOneSize
                        : Variables.threeInOneSize,
                    height: isAbnormal
                        ? Variables.twoInOneSize
                        : Variables.threeInOneSize,
                },
            ]}
            onPress={() => onPressItem()}>
            <FastImage
                style={styles.imageStyle}
                source={{
                    uri: 'https://unsplash.it/400/400?image=1',
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            {details && details.isSoldOut ? (
                <View style={styles.soldOutContainer}>
                    <CustomText
                        color={Colors.whiteColor}
                        size={Variables.mediumTextSize}
                        family={Family.SEMIBOLD}>
                        SOLD OUT
                    </CustomText>
                </View>
            ) : null}
            <View style={styles.favouriteContainer}>
                <HeartIcon />
            </View>
            {details && details.price ? (
                <View style={styles.priceContainer}>
                    <CustomText
                        color={Colors.whiteColor}
                        size={Variables.normalTextSize}
                        family={Family.SEMIBOLD}>
                        {FormatCurrency(details.price)}
                    </CustomText>
                </View>
            ) : null}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 2.5,
        marginBottom: 2.5,
        backgroundColor: Colors.darkNeutralColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    priceContainer: {
        position: 'absolute',
        backgroundColor: Colors.hightOpacityPrimaryColor,
        bottom: 0,
        right: 0,
        height: 22,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopLeftRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    favouriteContainer: {
        position: 'absolute',
        backgroundColor: Colors.hightOpacitySecondaryColor,
        top: 0,
        left: 0,
        width: 33,
        height: 33,
        borderBottomRightRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },

    soldOutContainer: {
        position: 'absolute',
        backgroundColor: Colors.hightOpacityWarningColor,
        width: '100%',
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductItem;
