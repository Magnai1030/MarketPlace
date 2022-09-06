import React from 'react';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText, { Family } from '@custom/CustomText';

export type ProfileOrderProps = {
    onPressOrders: () => void;
    onPressSells: () => void;
    onPressLists: () => void;
};

const ProfileOrderContainer: React.FC<ProfileOrderProps> = ({
    onPressOrders,
    onPressSells,
    onPressLists,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity
                    style={[styles.buttonStyle, { marginRight: 5 }]}
                    onPress={() => onPressOrders()}>
                    <CustomText
                        color={Colors.blackColor}
                        family={Family.REGULAR}
                        size={Variables.mediumTextSize}>
                        Your Orders
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonStyle, { marginLeft: 5 }]}
                    onPress={() => onPressSells()}>
                    <CustomText
                        color={Colors.blackColor}
                        family={Family.REGULAR}
                        size={Variables.mediumTextSize}>
                        Sold Lists
                    </CustomText>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.singleStyle}
                onPress={() => onPressLists()}>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.REGULAR}
                    size={Variables.mediumTextSize}>
                    Your Lists
                </CustomText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
    },
    buttonStyle: {
        height: '100%',
        flex: 1,
        backgroundColor: Colors.whiteColor,
        borderRadius: Variables.mediumBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        ...Variables.shadow,
    },
    singleStyle: {
        width: '100%',
        height: 55,
        backgroundColor: Colors.whiteColor,
        borderRadius: Variables.mediumBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        ...Variables.shadow,
    },
});

export default ProfileOrderContainer;
