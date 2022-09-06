import React from 'react';
import { View, StyleSheet } from 'react-native';
import SmallInput from '@custom/SmallInput';
import Button from '@custom/Button';
import TransparentButton from '@custom/TransparentButton';
import CustomText, { Family } from '@custom/CustomText';
import ReloadIcon from '@icons/ic_reload.svg';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';

export type VerifyProps = {
    onPressSignIn: () => void;
};

const VerifyContainer: React.FC<VerifyProps> = ({ onPressSignIn }) => {
    const onChangeCode = (number: string) => {
        console.log(number);
    };

    const onPressResend = () => {
        console.log('Resend');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <SmallInput placeholder={'-'} onChange={onChangeCode} />
                <SmallInput placeholder={'-'} onChange={onChangeCode} />
                <SmallInput placeholder={'-'} onChange={onChangeCode} />
                <SmallInput placeholder={'-'} onChange={onChangeCode} />
            </View>

            <Button title={'SIGN IN'} onPress={onPressSignIn} />
            <TransparentButton onPress={onPressResend}>
                <ReloadIcon />
                <CustomText
                    color={Colors.blackColor}
                    family={Family.SEMIBOLD}
                    customStyle={styles.reloadTextStyle}
                    size={Variables.normalTextSize}>
                    RESEND
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
    inputContainer: {
        marginBottom: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reloadTextStyle: {
        marginLeft: 10,
    },
});

export default VerifyContainer;
