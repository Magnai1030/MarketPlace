import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export type TransparentButtonProps = {
    onPress: () => void;
};

const TransparentButton: React.FC<TransparentButtonProps> = ({
    children,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 33,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default TransparentButton;
