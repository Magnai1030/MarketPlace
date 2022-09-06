import React, { useContext, useState } from 'react';
import Screen, { ScreenType } from '@custom/Screen';
import TopBar, { TopBarType } from '@layouts/TopBar';
import TopContainer from '@containers/TopContainer';
import ProfileOrderContainer from '@containers/ProfileOrderContainer';
import { View, StyleSheet } from 'react-native';
import ProfileItem from '@items/ProfileItem';

import CouponIcon from '@icons/ic_profile_coupon.svg';
import AddressIcon from '@icons/ic_profile_address.svg';
import NotificationIcon from '@icons/ic_profile_notification.svg';
import ReferalIcon from '@icons/ic_profile_referal.svg';
import SupportIcon from '@icons/ic_profile_support.svg';
import TermsIcon from '@icons/ic_profile_terms.svg';
import { NavigationContext } from '@react-navigation/native';

const Profile = () => {
    const navigation = useContext(NavigationContext);
    const onPressOrders = () => {
        console.log('Orders');
    };
    const onPressSells = () => {
        console.log('Sells');
    };
    const onPressLists = () => {
        console.log('Lists');
    };
    const onPressItem = (to: string) => {
        navigation?.navigate(to);
    };
    return (
        <Screen scroll={ScreenType.NOTSCROLLABLE}>
            <TopBar type={TopBarType.PROFILE} isRound={true} />
            <TopContainer>
                <ProfileOrderContainer
                    onPressOrders={onPressOrders}
                    onPressSells={onPressSells}
                    onPressLists={onPressLists}
                />
            </TopContainer>
            <View style={styles.itemContainer}>
                <ProfileItem
                    title="Coupon"
                    navigate="Coupon"
                    onPressItem={onPressItem}>
                    <CouponIcon />
                </ProfileItem>
                <ProfileItem
                    title="Address"
                    navigate="Address"
                    onPressItem={onPressItem}>
                    <AddressIcon />
                </ProfileItem>
                <ProfileItem
                    title="Notification"
                    navigate="Notification"
                    onPressItem={onPressItem}>
                    <NotificationIcon />
                </ProfileItem>
                <ProfileItem
                    title="Referal Friend"
                    navigate="ReferalFriend"
                    onPressItem={onPressItem}>
                    <ReferalIcon />
                </ProfileItem>
                <ProfileItem
                    title="Support"
                    navigate="Support"
                    onPressItem={onPressItem}>
                    <SupportIcon />
                </ProfileItem>
                <ProfileItem
                    title="Terms & Conditions"
                    navigate="TermsConditions"
                    onPressItem={onPressItem}>
                    <TermsIcon />
                </ProfileItem>
            </View>
        </Screen>
    );
};
const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 30,
        paddingRight: 15,
        paddingLeft: 15,
        alignItems: 'center',
    },
});
export default Profile;
