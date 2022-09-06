import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText, { Family } from '@custom/CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';

export type ProfileI = {
    title: string;
    navigate: string;
    onPressItem: (text: string) => void;
};

const ProfileItem: React.FC<ProfileI> = ({
    title,
    navigate,
    children,
    onPressItem,
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPressItem(navigate)}>
            <View style={styles.imageContainer}>{children}</View>
            <CustomText
                color={Colors.blackColor}
                size={Variables.normalTextSize}
                family={Family.REGULAR}>
                {title}
            </CustomText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.whiteColor,
        borderRadius: Variables.normalBorderRadius,
        paddingLeft: 30,
        paddingRight: 30,
        height: 44,
        marginBottom: 10,
        ...Variables.shadow,
    },
    imageContainer: {
        width: 14,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
});

export default ProfileItem;
