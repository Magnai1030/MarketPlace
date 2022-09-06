import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    StyleProp,
    ReturnKeyTypeOptions,
    ViewStyle,
} from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import CustomText, { Family } from '@custom/CustomText';

export type InputProps = {
    isError?: boolean;
    placeholder: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    customStyle?: StyleProp<ViewStyle>;
    returnKeyType?: ReturnKeyTypeOptions;
    onChange: (e: string) => void;
    onSubmitEditing?: any;
};

const Input: React.FC<InputProps> = ({
    isError,
    placeholder,
    errorMessage,
    onChange,
    onSubmitEditing,
    secureTextEntry,
    customStyle,
    returnKeyType,
}) => {
    const isRenderError = () => {
        if (isError) {
            return (
                <CustomText
                    color={Colors.errorColor}
                    family={Family.REGULAR}
                    size={Variables.smallTextSize}>
                    {errorMessage}
                </CustomText>
            );
        } else {
            return null;
        }
    };

    return (
        <View style={[styles.container, customStyle]}>
            <TextInput
                onChangeText={text => onChange(text)}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
                placeholderTextColor={Colors.regularGrayColor}
                returnKeyType={returnKeyType}
                autoCorrect={false}
                style={[
                    styles.inputStyle,
                    {
                        borderColor: isError
                            ? Colors.errorColor
                            : Colors.darkNeutralColor,
                    },
                ]}
                placeholder={placeholder}
            />
            {isRenderError()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
    },
    inputStyle: {
        paddingLeft: 15,
        fontFamily: Family.REGULAR,
        paddingRight: 15,
        borderRadius: Variables.normalBorderRadius,
        borderWidth: 1,
        height: 44,
        color: Colors.blackColor,
        backgroundColor: Colors.lightNeutralColor,
        fontSize: Variables.normalTextSize,
    },
});

export default Input;
