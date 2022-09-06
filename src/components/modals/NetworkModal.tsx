import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText, { Family } from '@components/custom/CustomText';
import Variables from '@constants/Variables';
import { useNetInfo } from '@react-native-community/netinfo';
import Colors from '@constants/Colors';
import ConnectionLostIcon from '@icons/ic_connection_lost.svg';

const NetworkModal: React.FC = () => {
    const netInfo = useNetInfo();
    if (netInfo.isConnected) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ConnectionLostIcon />
                <CustomText
                    color={Colors.blackColor}
                    family={Family.REGULAR}
                    customStyle={styles.titleStyle}
                    size={Variables.extraBigTextSize}>
                    Connection Lost
                </CustomText>
                <CustomText
                    color={Colors.blackColor}
                    family={Family.REGULAR}
                    size={Variables.mediumTextSize}>
                    Please check your connection
                </CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: Colors.modalNeutralColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        borderRadius: Variables.bigBorderRadius,
        ...Variables.shadow,
    },
    titleStyle: {
        marginTop: 40,
        marginBottom: 10,
    },
});

export default NetworkModal;
