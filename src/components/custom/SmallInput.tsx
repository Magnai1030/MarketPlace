import React from 'react';
import {
    StyleSheet,
    TextInput,
    ReturnKeyTypeOptions,
    StyleProp,
    ViewStyle,
} from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { Family } from '@custom/CustomText';

export type SmallInputProps = {
    isError?: boolean;
    placeholder: string;
    returnKeyType?: ReturnKeyTypeOptions;
    onChange: (e: string) => void;
    onSubmitEditing?: any;
};

const SmallInput: React.FC<SmallInputProps> = ({
    isError,
    placeholder,
    onChange,
    onSubmitEditing,
    returnKeyType,
}) => {
    return (
        <TextInput
            onChangeText={text => onChange(text)}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            placeholderTextColor={Colors.regularGrayColor}
            maxLength={1}
            autoCorrect={false}
            style={[
                styles.container,
                {
                    borderColor: isError
                        ? Colors.errorColor
                        : Colors.darkNeutralColor,
                },
            ]}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        fontFamily: Family.REGULAR,
        borderRadius: Variables.normalBorderRadius,
        borderWidth: 1,
        height: 44,
        width: 44,
        marginRight: 5,
        marginLeft: 5,
        textAlign: 'center',
        color: Colors.blackColor,
        backgroundColor: Colors.lightNeutralColor,
        fontSize: Variables.normalTextSize,
    },
});

export default SmallInput;
