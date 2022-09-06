import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText, { Family } from '@custom/CustomText';
import BackIcon from '@icons/ic_back.svg';
import ProfileIcon from '@icons/ic_profile_round.svg';

export enum TopBarType {
    ONLYSTATUS,
    BACK,
    PROFILE,
}

export type TopBarProps = {
    type: TopBarType;
    title?: string;
    isRound?: boolean;
};

const TopBar: React.FC<TopBarProps> = ({ type, title, isRound }) => {
    const navigation = useNavigation();
    const onPressBack = () => {
        navigation?.goBack();
    };
    if (type === TopBarType.BACK) {
        return (
            <View
                style={[
                    styles.topBarContainer,
                    isRound
                        ? {
                              borderBottomLeftRadius:
                                  Variables.mediumBorderRadius,
                              borderBottomRightRadius:
                                  Variables.mediumBorderRadius,
                          }
                        : null,
                ]}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={onPressBack}>
                    <BackIcon />
                    <CustomText
                        customStyle={styles.textStyle}
                        color={Colors.blackColor}
                        family={Family.REGULAR}
                        size={Variables.normalTextSize}>
                        {title}
                    </CustomText>
                </TouchableOpacity>
            </View>
        );
    } else if (type === TopBarType.PROFILE) {
        return (
            <View
                style={[
                    styles.profileBarContainer,
                    isRound
                        ? {
                              borderBottomLeftRadius:
                                  Variables.mediumBorderRadius,
                              borderBottomRightRadius:
                                  Variables.mediumBorderRadius,
                          }
                        : null,
                ]}>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.REGULAR}
                    size={Variables.mediumTextSize}>
                    {'Hello, '}
                    <CustomText
                        color={Colors.blackColor}
                        family={Family.SEMIBOLD}
                        size={Variables.mediumTextSize}>
                        Batmagnai
                    </CustomText>
                </CustomText>
                <View style={styles.profileButtonStyle}>
                    <ProfileIcon />
                </View>
            </View>
        );
    } else {
        return null;
    }
};

const styles = StyleSheet.create({
    topBarContainer: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
    },
    profileBarContainer: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 30,
        paddingLeft: 30,
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
    },
    buttonContainer: {
        width: 'auto',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textStyle: {
        marginLeft: 10,
    },
    profileButtonStyle: {
        width: 33,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor,
        borderRadius: 16.5,
    },
});

export default TopBar;
