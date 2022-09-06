import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableItem from '@items/TableItem';
import Variables from '@constants/Variables';
import Colors from '@constants/Colors';
import { TableItemI } from '@types';

export type ContainerProps = {
    datas: TableItemI[];
};

const TableInfoContainer: React.FC<ContainerProps> = ({
    datas: products,
}: ContainerProps) => {
    return (
        <View style={styles.container}>
            {products.map((itemData, index) => (
                <TableItem key={index} info={itemData} index={index} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: Variables.mediumBorderRadius,
        backgroundColor: Colors.lightNeutralColor,
        paddingTop: 15,
        paddingBottom: 15,
    },
});

export default TableInfoContainer;
