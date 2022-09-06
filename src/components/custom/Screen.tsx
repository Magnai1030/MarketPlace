import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';

export enum ScreenType {
    SCROLLABLE,
    NOTSCROLLABLE,
}

export type ScreenProps = {
    scroll: ScreenType;
};

const Screen: React.FC<ScreenProps> = ({ children, scroll }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {scroll == ScreenType.SCROLLABLE ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.subContainer}>{children}</View>
                </ScrollView>
            ) : (
                <View style={styles.subContainer}>{children}</View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
    },
    subContainer: {
        flex: 1,
        width: Variables.deviceWidth,
        backgroundColor: Colors.lightNeutralColor,
    },
});

export default Screen;
