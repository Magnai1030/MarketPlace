import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import CloseIcon from '@icons/ic_close.svg';
import BackIcon from '@icons/ic_back.svg';
import CustomText, { Family } from '@custom/CustomText';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { IHandles } from 'react-native-modalize/lib/options';

export type ModalProps = {
    modalizeRef: React.RefObject<IHandles>;
    onPressClose: () => void;
    title: string;
    onPressBack?: () => void;
    isRenderBack?: boolean;
    contentHeight: boolean;
    isRenderClose: boolean;
};

const Modal: React.FC<ModalProps> = ({
    modalizeRef,
    onPressClose,
    contentHeight,
    onPressBack,
    isRenderBack,
    title,
    children,
    isRenderClose,
}) => {
    return (
        <Portal>
            <Modalize
                ref={modalizeRef}
                onClosed={onPressClose}
                adjustToContentHeight={contentHeight}
                scrollViewProps={{
                    scrollEnabled: false,
                }}
                modalStyle={styles.modalStyle}
                overlayStyle={styles.modalOverLayStyle}>
                {isRenderClose ? (
                    <View style={styles.headerContainer}>
                        <View style={styles.leftContainer}>
                            {isRenderBack ? (
                                <TouchableOpacity
                                    style={[
                                        styles.buttonContainer,
                                        { marginRight: 10 },
                                    ]}
                                    onPress={onPressBack}>
                                    <BackIcon />
                                </TouchableOpacity>
                            ) : null}
                            <CustomText
                                color={Colors.blackColor}
                                family={Family.SEMIBOLD}
                                size={Variables.mediumTextSize}>
                                {title}
                            </CustomText>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={onPressClose}>
                            <CloseIcon />
                        </TouchableOpacity>
                    </View>
                ) : null}
                {children}
            </Modalize>
        </Portal>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 85,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    leftContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        width: 22,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalOverLayStyle: {
        backgroundColor: Colors.modalNeutralColor,
    },
    modalStyle: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
});

export default Modal;
