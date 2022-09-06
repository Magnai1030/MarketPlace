import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Variables from '@constants/Variables';
import Colors from '@constants/Colors';

import HeartIcon from '@icons/ic_heart.svg';
import LeftIcon from '@icons/ic_left.svg';
import RightIcon from '@icons/ic_right.svg';

import CustomText, { Family } from '@custom/CustomText';
import ImageZoomModal from '@modals/ImageZoomModal';

export type PostImageProps = {
    images: string[];
};

const PostImageContainer: React.FC<PostImageProps> = ({
    images: postImages,
}: PostImageProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [isLoadImageZoom, setIsLoadImageZoom] = useState<boolean>(false);

    const onPressDirection = (direction: string) => {
        setImageIndex(direction === 'left' ? imageIndex + 1 : imageIndex - 1);
    };
    const onPressZoom = () => {
        setIsLoadImageZoom(true);
    };
    const onPressLike = () => {
        console.log('like');
    };
    const handleClose = () => {
        setIsLoadImageZoom(false);
    };
    return (
        <View style={styles.imageContainer}>
            <FastImage
                style={styles.imageStyle}
                source={{
                    uri: 'https://unsplash.it/400/400?image=1',
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
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
            <TouchableOpacity
                onPress={() => onPressZoom()}
                style={styles.imageCountStyle}>
                <CustomText
                    size={Variables.normalTextSize}
                    color={Colors.whiteColor}
                    family={Family.REGULAR}>
                    1/4
                </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPressLike()}
                style={styles.favouriteButtonStyle}>
                <HeartIcon />
            </TouchableOpacity>
            <ImageZoomModal
                isLoad={isLoadImageZoom}
                handleClose={handleClose}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: Variables.deviceWidth,
        borderRadius: Variables.bigBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: Variables.bigBorderRadius,
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
        bottom: 15,
        height: 33,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.regularGrayColor,
    },
    favouriteButtonStyle: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        height: 44,
        width: 44,
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        ...Variables.shadow,
    },
});

export default PostImageContainer;
