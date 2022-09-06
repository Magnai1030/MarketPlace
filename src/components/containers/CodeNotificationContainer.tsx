import React from 'react';
import Colors from '@constants/Colors';
import Variables from '@constants/Variables';
import { View, StyleSheet } from 'react-native';
import CustomText, { Family } from '@custom/CustomText';
import CopyIcon from '@icons/ic_copy.svg';

export type CodeProps = {
    title: string;
    description: string;
    code: string;
};

const CodeNotificationContainer: React.FC<CodeProps> = ({
    title,
    description,
    code,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchStyle}>
                <CustomText
                    color={Colors.regularGrayColor}
                    family={Family.REGULAR}
                    size={Variables.smallTextSize}>
                    {code}
                </CustomText>
                <View style={styles.copyStyle}>
                    <CopyIcon />
                </View>
            </View>
            <CustomText
                size={Variables.mediumTextSize}
                color={Colors.blackColor}
                family={Family.REGULAR}
                customStyle={styles.titleStyle}>
                {title}
            </CustomText>
            <CustomText
                size={Variables.normalTextSize}
                color={Colors.regularGrayColor}
                family={Family.REGULAR}>
                {description}
            </CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 33,
        height: 'auto',
    },
    titleStyle: {
        marginBottom: 15,
    },
    copyStyle: {
        position: 'absolute',
        right: 15,
    },
    searchStyle: {
        width: '100%',
        backgroundColor: Colors.lightNeutralColor,
        borderRadius: Variables.normalBorderRadius,
        borderColor: Colors.darkNeutralColor,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        marginBottom: 20,
    },
});

export default CodeNotificationContainer;
