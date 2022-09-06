import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import CustomText, { Family } from '@custom/CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import UserIcon from '@icons/ic_user_round.svg';
import StarIcon from '@icons/ic_star_outline.svg';

export type SellerProps = {
    id: string;
};

const SellerContainer: React.FC<SellerProps> = ({ id }) => {
    return (
        <View style={styles.container}>
            <View style={styles.sellerContainer}>
                <View style={styles.profileContainer}>
                    <UserIcon />
                </View>
                <View style={styles.infoContainer}>
                    <CustomText
                        color={Colors.blackColor}
                        size={Variables.mediumTextSize}
                        family={Family.REGULAR}>
                        Batmagnai
                    </CustomText>
                    <View style={styles.starContainer}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.offerButtonStyle}>
                    <CustomText
                        color={Colors.secondaryColor}
                        size={Variables.normalTextSize}
                        family={Family.SEMIBOLD}>
                        OFFER
                    </CustomText>
                </Pressable>
                <Pressable style={styles.questionButtonStyle}>
                    <CustomText
                        color={Colors.whiteColor}
                        size={Variables.normalTextSize}
                        family={Family.SEMIBOLD}>
                        QUESTION
                    </CustomText>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Variables.deviceWidth - 30,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        ...Variables.shadow,
        borderRadius: Variables.bigBorderRadius,
        padding: 15,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 15,
    },
    sellerContainer: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
    },
    profileContainer: {
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.regularNeutralColor,
        borderRadius: Variables.mediumBorderRadius,
        marginRight: 10,
        ...Variables.shadow,
    },
    infoContainer: {
        flex: 1,
        height: 55,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    offerButtonStyle: {
        flex: 1,
        height: 55,
        marginRight: 5,
        borderWidth: 2,
        borderColor: Colors.secondaryColor,
        borderRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionButtonStyle: {
        flex: 1,
        height: 55,
        marginLeft: 5,
        backgroundColor: Colors.primaryColor,
        borderRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SellerContainer;
