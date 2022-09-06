import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '@custom/Input';
import Button from '@custom/Button';
import TransparentButton from '@custom/TransparentButton';
import CustomText, { Family } from '@custom/CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';

export type SignUpProps = {
    onPressVerify: () => void;
    onPressSignUp: () => void;
};

const SignUpContainer: React.FC<SignUpProps> = ({
    onPressVerify,
    onPressSignUp,
}) => {
    const onChangePhoneNumber = (number: string) => {
        console.log(number);
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder={'Phone Number'}
                onChange={onChangePhoneNumber}
                customStyle={styles.inputStyle}
            />
            <Button title={'VERIFY'} onPress={onPressVerify} />
            <TransparentButton onPress={onPressSignUp}>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.REGULAR}
                    size={Variables.normalTextSize}>
                    Don’t Have Account ?
                    <CustomText
                        color={Colors.blackColor}
                        family={Family.SEMIBOLD}
                        size={Variables.normalTextSize}>
                        {' SIGN UP'}
                    </CustomText>
                </CustomText>
            </TransparentButton>
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
    inputStyle: {
        marginBottom: 30,
    },
});

export default SignUpContainer;
