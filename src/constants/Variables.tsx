import { Platform, Dimensions } from 'react-native';
import Colors from './Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;

const smallBorderRadius = 5;
const normalBorderRadius = 10;
const mediumBorderRadius = 15;
const bigBorderRadius = 25;

const smallTextSize = 12;
const normalTextSize = 14;
const mediumTextSize = 18;
const bigTextSize = 24;
const extraBigTextSize = 36;

const shadow = {
    shadowOffset: {
        width: 4,
        height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowColor: Colors.blackColor,
};

const threeInOneSize = deviceWidth / 3 - 6.5;
const twoInOneSize = threeInOneSize * 2 + 4.75;

export default {
    platform,
    deviceWidth,
    deviceHeight,

    smallBorderRadius,
    normalBorderRadius,
    mediumBorderRadius,
    bigBorderRadius,

    smallTextSize,
    normalTextSize,
    mediumTextSize,
    bigTextSize,
    extraBigTextSize,

    shadow,

    threeInOneSize,
    twoInOneSize,
};
