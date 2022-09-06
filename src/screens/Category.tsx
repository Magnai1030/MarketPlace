import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import SearchContainer from '@containers/SearchContainer';
import TopBar, { TopBarType } from '@layouts/TopBar';
import CustomContainer from '@containers/CustomContainer';
import CustomText, { Family } from '@components/custom/CustomText';
import { NavigationContext } from '@react-navigation/native';
import Screen, { ScreenType } from '@custom/Screen';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import RecentIcon from '@icons/ic_recent.svg';

const Category = () => {
    const navigation = useContext(NavigationContext);
    const onPressItem = () => {
        navigation?.navigate('Result');
    };
    return (
        <Screen scroll={ScreenType.NOTSCROLLABLE}>
            <TopBar type={TopBarType.BACK} title={'Category'} />
            <SearchContainer isRound={true} />
            <View style={styles.container}>
                <CustomContainer title="All Categories" type={Family.REGULAR}>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity
                            onPress={() => onPressItem()}
                            style={styles.rowItemStyle}>
                            <View style={styles.imageContainer}>
                                <RecentIcon />
                            </View>
                            <CustomText
                                customStyle={styles.rowTextStyle}
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </TouchableOpacity>
                        <View style={styles.rowItemStyle}>
                            <View style={styles.imageContainer}>
                                <RecentIcon />
                            </View>
                            <CustomText
                                customStyle={styles.rowTextStyle}
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </View>
                        <View style={styles.rowItemStyle}>
                            <View style={styles.imageContainer}>
                                <RecentIcon />
                            </View>
                            <CustomText
                                customStyle={styles.rowTextStyle}
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </View>
                    </View>
                </CustomContainer>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingBottom: 45,
        paddingRight: 15,
        paddingLeft: 15,
    },
    itemContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    rowItemStyle: {
        height: 'auto',
        width: '100%',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rowTextStyle: {
        marginLeft: 10,
    },
    imageContainer: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        height: 33,
        width: 33,
        ...Variables.shadow,
    },
});

export default Category;
