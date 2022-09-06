import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CustomText, { Family } from '@components/custom/CustomText';
import Button from '@custom/Button';
import Modal from '@custom/Modal';
import Variables from '@constants/Variables';
import Colors from '@constants/Colors';

export type FilterProps = {
    isLoad: boolean;
    onClose: () => void;
};

const FilterModal: React.FC<FilterProps> = ({ isLoad, onClose }) => {
    const modalizeRef = useRef<Modalize>(null);

    useEffect(() => {
        if (modalizeRef.current) {
            if (isLoad) {
                modalizeRef.current.open();
            } else {
                modalizeRef.current.close();
            }
        }
    }, [isLoad]);

    const onPressFind = () => {
        console.log('Find');
    };

    return (
        <Modal
            modalizeRef={modalizeRef}
            onPressClose={onClose}
            contentHeight={true}
            title={'Sort'}
            isRenderClose={true}>
            <View style={styles.container}>
                <View style={styles.sortContainer}>
                    <View style={styles.sortStyle}>
                        <View style={styles.checkStyle}></View>
                        <CustomText
                            color={Colors.blackColor}
                            family={Family.REGULAR}
                            size={Variables.normalTextSize}>
                            Featured
                        </CustomText>
                    </View>
                    <View style={styles.sortStyle}>
                        <View style={styles.checkStyle}></View>
                        <CustomText
                            color={Colors.blackColor}
                            family={Family.REGULAR}
                            size={Variables.normalTextSize}>
                            Newest First
                        </CustomText>
                    </View>
                    <View style={styles.sortStyle}>
                        <View style={styles.checkStyle}></View>
                        <CustomText
                            color={Colors.blackColor}
                            family={Family.REGULAR}
                            size={Variables.normalTextSize}>
                            Price (High to Low)
                        </CustomText>
                    </View>
                    <View style={styles.sortStyle}>
                        <View style={styles.checkStyle}></View>
                        <CustomText
                            color={Colors.blackColor}
                            family={Family.REGULAR}
                            size={Variables.normalTextSize}>
                            Price (Low to High)
                        </CustomText>
                    </View>
                </View>
                <View style={styles.brandContainer}>
                    <View style={styles.titleContainer}>
                        <CustomText
                            color={Colors.blackColor}
                            family={Family.SEMIBOLD}
                            size={Variables.mediumTextSize}>
                            Brand
                        </CustomText>
                    </View>
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
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.titleContainer}>
                        <CustomText
                            color={Colors.blackColor}
                            family={Family.SEMIBOLD}
                            size={Variables.mediumTextSize}>
                            Price range
                        </CustomText>
                    </View>
                </View>
                <Button title={'FIND'} onPress={onPressFind} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 33,
        height: 'auto',
    },
    sortContainer: {
        width: '100%',
        height: 'auto',
    },
    brandContainer: {
        width: '100%',
        height: 'auto',
    },
    titleContainer: {
        width: '100%',
        height: 85,
        justifyContent: 'center',
    },
    priceContainer: {
        width: '100%',
        height: 'auto',
    },
    sortStyle: {
        width: '100%',
        flexDirection: 'row',
        height: 33,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    checkStyle: {
        height: 22,
        width: 22,
        borderRadius: Variables.smallBorderRadius,
        borderColor: Colors.darkNeutralColor,
        backgroundColor: Colors.lightNeutralColor,
        borderWidth: 1,
        marginRight: 10,
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
});

export default FilterModal;
