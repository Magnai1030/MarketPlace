import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Colors from '@constants/Colors';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const PostButton: React.FC<BottomTabBarButtonProps> = ({
    children,
    onPress,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                {children}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: -45,
        justifyContent: 'center',
        alignItems: 'center',
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: Colors.lightNeutralColor,
    },
    buttonStyle: {
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: Colors.regularNeutralColor,
    },
});
export default PostButton;
