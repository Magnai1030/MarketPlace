import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText, { Family } from '@custom/CustomText';
import { TableItemI } from '@types';

const TableItem: React.FC<{
    info: TableItemI;
    index: number;
}> = ({ info, index }) => {
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor:
                        index % 2
                            ? Colors.regularNeutralColor
                            : Colors.lightNeutralColor,
                },
            ]}>
            <CustomText
                color={Colors.blackColor}
                size={Variables.smallTextSize}
                family={Family.REGULAR}>
                {info.title}
            </CustomText>
            <CustomText
                color={Colors.blackColor}
                size={Variables.smallTextSize}
                family={Family.REGULAR}>
                {info.detail}
            </CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 22,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
    },
});

export default TableItem;
