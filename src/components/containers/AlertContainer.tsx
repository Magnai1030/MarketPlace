import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlertModal from '@modals/AlertModal';
import { AlertI } from '@types';

type AlertContainerProps = {
    alertData: AlertI[];
    onPressClose: (index: number) => void;
};

const AlertContainer: React.FC<AlertContainerProps> = ({
    alertData: alertArray,
    onPressClose,
}) => {
    if (alertArray.length > 0) {
        return (
            <View style={styles.container} pointerEvents="box-none">
                {alertArray.map((itemData, index) => (
                    <AlertModal
                        alertData={itemData}
                        onPressClose={onPressClose}
                        index={index}
                        key={index}
                    />
                ))}
            </View>
        );
    } else {
        return null;
    }
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        right: 50,
        left: 50,
        flexDirection: 'column',
    },
});

export default AlertContainer;
