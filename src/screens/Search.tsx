import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchContainer from '@containers/SearchContainer';
import SearchTypeContainer from '@containers/SearchTypeContainer';
import TopContainer from '@containers/TopContainer';
import CustomContainer from '@containers/CustomContainer';
import CustomText, { Family } from '@components/custom/CustomText';
import { NavigationContext } from '@react-navigation/native';
import Screen, { ScreenType } from '@custom/Screen';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import RecentIcon from '@icons/ic_recent.svg';

const Search = () => {
    const navigation = useContext(NavigationContext);
    const onPressType = () => {
        navigation?.navigate('Category');
    };
    // const [data, setData] = useState([
    //     { price: 12000 },
    //     { price: 12000 },
    //     { price: 12000 },
    // ]);
    return (
        <Screen scroll={ScreenType.NOTSCROLLABLE}>
            <SearchContainer isRound={true} />
            <TopContainer>
                <SearchTypeContainer
                    onPressType={onPressType}></SearchTypeContainer>
            </TopContainer>
            <View style={styles.container}>
                <CustomContainer title="Popular" type={Family.REGULAR}>
                    <View style={styles.itemContainer}>
                        <View style={styles.tagItemStyle}>
                            <CustomText
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </View>
                        <View style={styles.tagItemStyle}>
                            <CustomText
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </View>
                        <View style={styles.tagItemStyle}>
                            <CustomText
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </View>
                    </View>
                </CustomContainer>
                <CustomContainer title="Recent" type={Family.REGULAR}>
                    <View style={styles.itemContainer}>
                        <View style={styles.rowItemStyle}>
                            <RecentIcon />
                            <CustomText
                                customStyle={styles.rowTextStyle}
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </View>
                        <View style={styles.rowItemStyle}>
                            <RecentIcon />
                            <CustomText
                                customStyle={styles.rowTextStyle}
                                color={Colors.blackColor}
                                family={Family.REGULAR}
                                size={Variables.normalTextSize}>
                                Test
                            </CustomText>
                        </View>
                        <View style={styles.rowItemStyle}>
                            <RecentIcon />
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
    tagItemStyle: {
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
    rowItemStyle: {
        height: 33,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rowTextStyle: {
        marginLeft: 10,
    },
});

export default Search;
