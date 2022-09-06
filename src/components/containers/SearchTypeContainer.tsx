import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText, { Family } from '@custom/CustomText';
import BarcodeIcon from '@icons/ic_barcode.svg';
import BrandIcon from '@icons/ic_brand.svg';
import CategoryIcon from '@icons/ic_category.svg';

export type SearchTypeProps = {
    onPressType: () => void;
};

const SearchTypeContainer: React.FC<SearchTypeProps> = ({ onPressType }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemStyle} onPress={onPressType}>
                <View style={styles.imageContainer}>
                    <CategoryIcon />
                </View>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.SEMIBOLD}
                    size={Variables.smallTextSize}>
                    CATEGORY
                </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.itemStyle, styles.centerMargin]}
                onPress={onPressType}>
                <View style={styles.imageContainer}>
                    <BrandIcon />
                </View>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.SEMIBOLD}
                    size={Variables.smallTextSize}>
                    BRAND
                </CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemStyle} onPress={onPressType}>
                <View style={styles.imageContainer}>
                    <BarcodeIcon />
                </View>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.SEMIBOLD}
                    size={Variables.smallTextSize}>
                    BARCODE
                </CustomText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    itemStyle: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
    },
    centerMargin: {
        marginLeft: 50,
        marginRight: 50,
    },
    imageContainer: {
        backgroundColor: Colors.whiteColor,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        borderRadius: Variables.mediumBorderRadius,
        ...Variables.shadow,
    },
});

export default SearchTypeContainer;
