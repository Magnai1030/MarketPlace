import React from 'react';
import { View, StyleSheet } from 'react-native';
import TagItem from '@items/TagItem';
import { TagItemI } from '@types';

export type ContainerProps = {
    datas: TagItemI[];
};

const TagContainer: React.FC<ContainerProps> = ({
    datas: products,
}: ContainerProps) => {
    return (
        <View style={styles.container}>
            {products.map((itemData, index) => (
                <TagItem key={index} info={itemData} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
});

export default TagContainer;
