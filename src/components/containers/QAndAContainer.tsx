import React from 'react';
import { View, StyleSheet } from 'react-native';
import QAItem, { QAItemI } from '@items/QAItem';

export type ContainerProps = {
    datas: QAItemI[];
};

const QAndAContainer: React.FC<ContainerProps> = ({
    datas: products,
}: ContainerProps) => {
    return (
        <View style={styles.container}>
            {products.map((itemData, index) => (
                <QAItem key={index} info={itemData} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    },
});

export default QAndAContainer;
