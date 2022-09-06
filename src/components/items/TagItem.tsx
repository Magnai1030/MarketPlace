import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText, { Family } from '@custom/CustomText';
import { TagItemI } from '@types';

const TagItem: React.FC<{
    info: TagItemI;
}> = ({ info }) => {
    return (
        <View style={styles.container}>
            <CustomText
                color={Colors.blackColor}
                family={Family.REGULAR}
                size={Variables.normalTextSize}>
                #{info.title}
            </CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.regularNeutralColor,
        borderRadius: Variables.smallBorderRadius,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        marginRight: 10,
    },
});

export default TagItem;
