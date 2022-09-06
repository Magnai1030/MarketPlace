import React from 'react';
import Variables from '@constants/Variables';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Colors from '@constants/Colors';

const ProductSkeleton = () => {
    return (
        <SkeletonPlaceholder backgroundColor={Colors.darkNeutralColor}>
            <SkeletonPlaceholder.Item
                width={Variables.threeInOneSize}
                height={Variables.threeInOneSize}
                marginTop={2.5}
                marginBottom={2.5}
            />
        </SkeletonPlaceholder>
    );
};
export default ProductSkeleton;
