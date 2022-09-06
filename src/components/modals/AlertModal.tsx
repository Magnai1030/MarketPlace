import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    ViewStyle,
} from 'react-native';
import CustomText, { Family } from '@components/custom/CustomText';
import Variables from '@constants/Variables';
import Colors from '@constants/Colors';
import CloseIcon from '@icons/ic_close_white.svg';
import InfoIcon from '@icons/ic_info.svg';
import { AlertI, ALERTBACKGROUNDCOLOR, ALERTBORDERCOLOR } from '@types';

export type AlertProps = {
    alertData: AlertI;
    index: number;
    onPressClose: (index: number) => void;
};

const AlertModal: React.FC<AlertProps> = ({
    alertData,
    index,
    onPressClose,
}) => {
    return (
        <View
            pointerEvents="box-none"
            style={[
                styles.container,
                {
                    marginBottom: 10,
                    backgroundColor: ALERTBACKGROUNDCOLOR[alertData.type],
                    borderColor: ALERTBORDERCOLOR[alertData.type],
                },
            ]}>
            <View style={styles.buttonStyle}>
                <InfoIcon />
            </View>
            <CustomText
                color={Colors.whiteColor}
                family={Family.REGULAR}
                customStyle={styles.titleStyle}
                size={Variables.mediumTextSize}>
                {alertData.title}
            </CustomText>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => onPressClose(index)}>
                <CloseIcon />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        borderRadius: 15,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...Variables.shadow,
    },
    titleStyle: {
        marginLeft: 10,
    },
    buttonStyle: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AlertModal;
