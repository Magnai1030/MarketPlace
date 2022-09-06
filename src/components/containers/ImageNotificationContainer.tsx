import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

export type ImageProps = {
    image: string;
};

const ImageNotificationContainer: React.FC<ImageProps> = ({ image }) => {
    return (
        <View style={styles.container}>
            <FastImage
                style={styles.imageStyle}
                source={{
                    uri: 'https://unsplash.it/400/400?image=1',
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
        </View>
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
    imageStyle: {
        width: '100%',
        height: 'auto',
    },
});

export default ImageNotificationContainer;
