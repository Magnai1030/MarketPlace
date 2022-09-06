import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    StyleProp,
    ViewStyle,
} from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText, { Family } from '@custom/CustomText';

export type ButtonProps = {
    title: string;
    type?: string;
    customStyle?: StyleProp<ViewStyle>;
    isLoading?: boolean;
    isDisabled?: boolean;
    onPress: any;
};

const Button: React.FC<ButtonProps> = ({
    title,
    type,
    customStyle,
    isLoading,
    isDisabled,
    onPress,
}) => {
    const typeSwitch = () => {
        let color = Colors.primaryColor;
        if (type === 'error') {
            color = Colors.errorColor;
        }
        return color;
    };
    const renderIndicator = () => {
        if (isLoading) {
            return (
                <ActivityIndicator
                    style={styles.loaderStyle}
                    size="small"
                    color={Colors.whiteColor}
                />
            );
        } else {
            return null;
        }
    };
    return (
        <TouchableOpacity
            disabled={isDisabled}
            style={[
                styles.container,
                {
                    backgroundColor: isDisabled
                        ? Colors.lightGrayColor
                        : typeSwitch(),
                },
                customStyle,
            ]}
            onPress={onPress}>
            <CustomText
                family={Family.SEMIBOLD}
                color={Colors.whiteColor}
                size={Variables.mediumTextSize}>
                {title}
            </CustomText>
            {renderIndicator()}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        borderRadius: Variables.normalBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loaderStyle: {
        position: 'absolute',
        right: 20,
    },
});

export default Button;
