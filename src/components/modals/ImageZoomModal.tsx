import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Variables from '@constants/Variables';
import Colors from '@constants/Colors';
import CloseIcon from '@icons/ic_close.svg';
import LeftIcon from '@icons/ic_left.svg';
import RightIcon from '@icons/ic_right.svg';

import CustomText, { Family } from '@custom/CustomText';

export type ZoomImageProps = {
    isLoad: boolean;
    handleClose: () => void;
};

const ImageZoomModal: React.FC<ZoomImageProps> = ({ isLoad, handleClose }) => {
    const onPressDirection = (direction: string) => {
        console.log(direction);
    };

    return (
        <Modal
            animationType="fade"
            visible={isLoad}
            presentationStyle="fullScreen"
            onRequestClose={handleClose}>
            <View style={styles.container}>
                <FastImage
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://unsplash.it/400/400?image=1',
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <TouchableOpacity
                    onPress={() => handleClose()}
                    style={styles.backButtonStyle}>
                    <CloseIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onPressDirection('left')}
                    style={styles.leftButtonStyle}>
                    <LeftIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onPressDirection('right')}
                    style={styles.rightButtonStyle}>
                    <RightIcon />
                </TouchableOpacity>
                <View style={styles.imageCountStyle}>
                    <CustomText
                        size={Variables.normalTextSize}
                        color={Colors.whiteColor}
                        family={Family.REGULAR}>
                        1/4
                    </CustomText>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: Variables.bigBorderRadius,
    },
    backButtonStyle: {
        position: 'absolute',
        top: 54,
        right: 10,
        height: 44,
        width: 44,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        ...Variables.shadow,
    },
    leftButtonStyle: {
        position: 'absolute',
        left: 10,
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.regularGrayColor,
    },
    rightButtonStyle: {
        position: 'absolute',
        right: 10,
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.regularGrayColor,
    },
    imageCountStyle: {
        position: 'absolute',
        bottom: 43,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.regularGrayColor,
    },
});

export default ImageZoomModal;
