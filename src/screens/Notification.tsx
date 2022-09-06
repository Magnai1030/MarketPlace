import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen, { ScreenType } from '@custom/Screen';
import TopBar, { TopBarType } from '@layouts/TopBar';
import TopContainer from '@containers/TopContainer';
import CustomText, { Family } from '@components/custom/CustomText';
import Variables from '@constants/Variables';
import Colors from '@constants/Colors';
import NotificationIcon from '@icons/ic_notification_not_found.svg';

const Notification: React.FC = () => {
    return (
        <Screen scroll={ScreenType.NOTSCROLLABLE}>
            <TopBar
                type={TopBarType.BACK}
                title={'Notification'}
                isRound={true}
            />
            {/* <TopContainer>
            </TopContainer> */}
            <View style={styles.itemContainer}>
                <NotificationIcon />
                <CustomText
                    color={Colors.blackColor}
                    family={Family.REGULAR}
                    customStyle={styles.titleStyle}
                    size={Variables.extraBigTextSize}>
                    Sorry
                </CustomText>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.REGULAR}
                    size={Variables.mediumTextSize}>
                    We couldn’t find any
                </CustomText>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        marginTop: 40,
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default Notification;
