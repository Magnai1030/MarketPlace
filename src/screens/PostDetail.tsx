import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Screen, { ScreenType } from '@custom/Screen';
import Variables from '@constants/Variables';
import Colors from '@constants/Colors';
import CustomText, { Family } from '@custom/CustomText';
import TableInfoContainer from '@containers/TableInfoContainer';
import TagContainer from '@containers/TagContainer';
import SellerContainer from '@containers/SellerContainer';
import PostImageContainer from '@containers/PostImageContainer';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '@icons/ic_back.svg';
import { FormatCurrency } from '@services/Helper';
import QAndAContainer from '@components/containers/QAndAContainer';
import LoginModal from '@modals/LoginModal';
import SignUpModal from '@modals/SignUpModal';
import { TableItemI, TagItemI, QAItemI } from '@types';

const PostDetail = () => {
    const [isLoadLogIn, setIsLoadLogIn] = useState<boolean>(false);
    const [isLoadSignUp, setIsLoadSignUp] = useState<boolean>(false);
    const navigation = useNavigation();
    const onPressBack = () => {
        navigation?.goBack();
    };
    const [data, setData] = useState<TableItemI[]>([
        { title: 'Sold by', detail: 'Amazon.com' },
        { title: 'Item Dimensions', detail: '7.8 x 2.6 x 10.3 inches' },
        { title: 'From', detail: 'Darkhan, Mongolia' },
        { title: 'Item Weight', detail: '1.00 lbs' },
    ]);
    const [tagData, setTagData] = useState<TagItemI[]>([
        { title: 'Sold by' },
        { title: 'Item Dimensions' },
        { title: 'From' },
        { title: 'Item Weight' },
    ]);
    const [qaData, setQAData] = useState<QAItemI[]>([
        { title: 'Sold by', description: 'Amazon' },
        { title: 'Item Dimensions', description: '123,321,213' },
    ]);

    const onCloseLogIn = () => {
        setIsLoadLogIn(false);
    };

    const onCloseSignUp = () => {
        setIsLoadSignUp(false);
    };
    return (
        <Screen scroll={ScreenType.NOTSCROLLABLE}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <PostImageContainer
                        images={[
                            'https://unsplash.it/400/400?image=1',
                            'https://unsplash.it/400/400?image=1',
                        ]}
                    />
                    <View style={styles.infoContainer}>
                        <CustomText
                            size={Variables.bigTextSize}
                            customStyle={styles.nameStyle}
                            color={Colors.blackColor}
                            family={Family.MEDIUM}>
                            Lorem ipsum
                        </CustomText>
                        <CustomText
                            size={Variables.normalTextSize}
                            customStyle={styles.brandStyle}
                            color={Colors.regularGrayColor}
                            family={Family.REGULAR}>
                            Lorem ipsum
                        </CustomText>
                        <CustomText
                            size={Variables.normalTextSize}
                            customStyle={styles.descriptionStyle}
                            color={Colors.blackColor}
                            family={Family.REGULAR}>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                        </CustomText>
                        <CustomText
                            size={Variables.mediumTextSize}
                            customStyle={styles.titleStyle}
                            color={Colors.blackColor}
                            family={Family.REGULAR}>
                            Detail
                        </CustomText>
                        <TableInfoContainer datas={data} />
                        <CustomText
                            size={Variables.mediumTextSize}
                            customStyle={styles.titleStyle}
                            color={Colors.blackColor}
                            family={Family.REGULAR}>
                            Tag
                        </CustomText>
                        <TagContainer datas={tagData} />
                        <CustomText
                            size={Variables.mediumTextSize}
                            customStyle={styles.titleStyle}
                            color={Colors.blackColor}
                            family={Family.REGULAR}>
                            Question & Answers
                        </CustomText>
                        <QAndAContainer datas={qaData} />
                    </View>
                    <SellerContainer id="s" />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.offerButtonStyle}>
                    <CustomText
                        color={Colors.secondaryColor}
                        size={Variables.normalTextSize}
                        family={Family.SEMIBOLD}>
                        OFFER
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buyButtonStyle}
                    onPress={() => setIsLoadLogIn(true)}>
                    <CustomText
                        color={Colors.whiteColor}
                        size={Variables.normalTextSize}
                        family={Family.SEMIBOLD}>
                        BUY
                    </CustomText>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => onPressBack()}
                style={styles.backButtonStyle}>
                <BackIcon />
            </TouchableOpacity>
            <View style={styles.priceContainer}>
                <CustomText
                    color={Colors.whiteColor}
                    size={Variables.normalTextSize}
                    customStyle={{ textDecorationLine: 'line-through' }}
                    family={Family.REGULAR}>
                    {FormatCurrency(1200000)}
                </CustomText>
                <CustomText
                    color={Colors.whiteColor}
                    size={Variables.bigTextSize}
                    family={Family.SEMIBOLD}>
                    {FormatCurrency(1000000)}
                </CustomText>
            </View>
            <LoginModal isLoad={isLoadLogIn} onClose={onCloseLogIn} />
            <SignUpModal isLoad={isLoadSignUp} onClose={onCloseSignUp} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        paddingBottom: 15,
    },

    infoContainer: {
        top: -5,
        width: Variables.deviceWidth - 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
        paddingBottom: 20,
        marginBottom: 10,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        ...Variables.shadow,
        borderRadius: Variables.bigBorderRadius,
    },
    backButtonStyle: {
        position: 'absolute',
        top: 10,
        left: 10,
        height: 44,
        width: 44,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        ...Variables.shadow,
    },
    priceContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.hightOpacityPrimaryColor,
        alignItems: 'flex-end',
        justifyContent: 'center',
        ...Variables.shadow,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    offerButtonStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 55,
        marginRight: 5,
        borderWidth: 2,
        borderColor: Colors.secondaryColor,
        borderRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyButtonStyle: {
        flex: 1,
        height: 55,
        marginLeft: 5,
        backgroundColor: Colors.primaryColor,
        borderRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameStyle: {
        width: '100%',
    },
    brandStyle: {
        width: '100%',
        marginBottom: 20,
    },
    descriptionStyle: {
        width: '100%',
    },
    titleStyle: {
        marginTop: 15,
        marginBottom: 10,
        width: '100%',
    },
});

export default PostDetail;
