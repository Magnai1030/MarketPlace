import React, { useState, useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import Modal from '@custom/Modal';
import SignUpContainer from '@containers/SignUpContainer';
import VerifyContainer from '@containers/VerifyContainer';

export enum LoginType {
    SIGNUP = 'SIGN UP',
    VERIFY = 'VERIFY',
}

export type LoginProps = {
    isLoad: boolean;
    onClose: () => void;
};

const LoginModal: React.FC<LoginProps> = ({ isLoad, onClose }) => {
    const [type, setType] = useState<LoginType>(LoginType.SIGNUP);
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

    const onPressClose = () => {
        setType(LoginType.SIGNUP);
        onClose();
    };

    const onPressVerify = () => {
        setType(LoginType.VERIFY);
    };

    const onPressBack = () => {
        setType(LoginType.SIGNUP);
    };

    const onPressSignUp = () => {
        console.log('SignUp');
    };

    const onPressSignIn = () => {
        console.log('SignIn');
    };

    return (
        <Modal
            modalizeRef={modalizeRef}
            contentHeight={true}
            onPressClose={onPressClose}
            onPressBack={onPressBack}
            isRenderBack={type === LoginType.VERIFY}
            title={type}
            isRenderClose={true}>
            {type === LoginType.SIGNUP ? (
                <SignUpContainer
                    onPressVerify={onPressVerify}
                    onPressSignUp={onPressSignUp}
                />
            ) : (
                <VerifyContainer onPressSignIn={onPressSignIn} />
            )}
        </Modal>
    );
};
export default LoginModal;
