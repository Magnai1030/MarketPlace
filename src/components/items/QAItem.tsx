import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText, { Family } from '@custom/CustomText';
import { QAItemI } from '@types';

const QAItem: React.FC<{
    info: QAItemI;
}> = ({ info }) => {
    return (
        <View style={styles.container}>
            <CustomText
                color={Colors.regularGrayColor}
                family={Family.REGULAR}
                size={Variables.smallTextSize}>
                {info.title}
            </CustomText>
            <CustomText
                color={Colors.blackColor}
                family={Family.REGULAR}
                size={Variables.normalTextSize}>
                {info.description}
            </CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10,
    },
});

export default QAItem;
