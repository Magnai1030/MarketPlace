import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText, { Family } from '@components/custom/CustomText';
import SearchIcon from '@icons/ic_search_gray.svg';
import FilterIcon from '@icons/ic_filter.svg';
import Colors from '@constants/Colors';
import FilterModal from '@modals/FilterModal';
import Variables from '@constants/Variables';

export type SearchProps = {
    isRound: boolean;
    isFilter?: boolean;
};

const SearchContainer: React.FC<SearchProps> = ({ isRound, isFilter }) => {
    const [isLoadFilter, setIsLoadFilter] = useState(false);

    const onCloseFilter = () => {
        setIsLoadFilter(false);
    };
    return (
        <View
            style={[
                styles.container,
                isRound
                    ? {
                          borderBottomLeftRadius: Variables.mediumBorderRadius,
                          borderBottomRightRadius: Variables.mediumBorderRadius,
                      }
                    : null,
            ]}>
            <View style={styles.innerContainer}>
                <View style={styles.searchStyle}>
                    <SearchIcon />
                    <CustomText
                        customStyle={styles.searchTextStyle}
                        color={Colors.regularGrayColor}
                        family={Family.REGULAR}
                        size={Variables.smallTextSize}>
                        Search ...
                    </CustomText>
                </View>
                {isFilter ? (
                    <TouchableOpacity
                        onPress={() => setIsLoadFilter(true)}
                        style={styles.filterContainer}>
                        <FilterIcon />
                    </TouchableOpacity>
                ) : null}
            </View>
            <FilterModal isLoad={isLoadFilter} onClose={onCloseFilter} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.whiteColor,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 33,
    },
    searchStyle: {
        flex: 1,
        backgroundColor: Colors.lightNeutralColor,
        paddingLeft: 15,
        borderRadius: Variables.smallBorderRadius,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        height: 33,
    },
    searchTextStyle: {
        marginLeft: 10,
    },
    filterContainer: {
        marginLeft: 15,
        height: 33,
        width: 44,
        backgroundColor: Colors.lightNeutralColor,
        borderRadius: Variables.smallBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchContainer;
