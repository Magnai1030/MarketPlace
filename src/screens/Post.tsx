import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen, { ScreenType } from '@custom/Screen';

const Post = () => {
    const [data, setData] = useState([
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
        { price: 12000 },
    ]);
    return <Screen scroll={ScreenType.NOTSCROLLABLE}></Screen>;
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flex: 1,
        paddingBottom: 45,
    },
});

export default Post;
