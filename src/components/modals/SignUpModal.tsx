import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CustomText, { Family } from '@custom/CustomText';
import Button from '@custom/Button';
import TransparentButton from '@custom/TransparentButton';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import Input from '@custom/Input';
import Modal from '@custom/Modal';

export type SignUpProps = {
    isLoad: boolean;
    onClose: () => void;
};

const SignUpModal: React.FC<SignUpProps> = ({ isLoad, onClose }) => {
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

    const onChangePhoneNumber = (number: string) => {
        console.log(number);
    };

    const onPressSignUp = () => {
        console.log('Sign up');
    };

    return (
        <Modal
            modalizeRef={modalizeRef}
            onPressClose={onClose}
            contentHeight={true}
            title={'SIGN UP'}
            isRenderClose={true}>
            <View style={styles.container}>
                <Input
                    placeholder={'Phone number'}
                    onChange={onChangePhoneNumber}
                    customStyle={styles.specialInputStyle}
                />
                <Input
                    placeholder={'First name'}
                    onChange={onChangePhoneNumber}
                    customStyle={styles.inputStyle}
                />
                <Input
                    placeholder={'Last name'}
                    onChange={onChangePhoneNumber}
                    customStyle={styles.inputStyle}
                />
                <Input
                    placeholder={'Email'}
                    onChange={onChangePhoneNumber}
                    customStyle={styles.specialInputStyle}
                />
                <Button title={'SIGN UP'} onPress={onPressSignUp} />
                <TransparentButton onPress={onPressSignUp}>
                    <CustomText
                        color={Colors.blackColor}
                        family={Family.REGULAR}
                        size={Variables.normalTextSize}>
                        Have Account ?
                        <CustomText
                            color={Colors.blackColor}
                            family={Family.SEMIBOLD}
                            size={Variables.normalTextSize}>
                            {' SIGN IN'}
                        </CustomText>
                    </CustomText>
                </TransparentButton>
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
    specialInputStyle: {
        marginBottom: 30,
    },
    inputStyle: {
        marginBottom: 20,
    },
});

export default SignUpModal;
