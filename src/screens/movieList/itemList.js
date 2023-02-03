import * as React from 'react';
import { View } from 'react-native';
import { movieStyle } from './styles';
import FastImages from '../../components/fastImage';
import { Center, Text, VStack } from 'native-base';

const ItemList = ({ item }) => {
    const { title, thumbnail } = item;
    console.log("thumbnail >>>", thumbnail)
    return (
        <View
            activeOpacity={0.6}
            style={movieStyle.itemContainer}
        >
            <VStack
                w={'100%'}
                h={270}
                p={2}
                bg={'#fff'}
                shadow={2}
                rounded={10}
                borderColor={'gray.300'}>
                <Center>
                    <FastImages
                        style={movieStyle.imageStyle}
                        imageSource={{ uri: thumbnail }}
                        resizeMode={'contain'}
                    />
                    <Text numberOfLines={2} style={movieStyle.productName}>
                        {title}
                    </Text>
                </Center>
            </VStack>
        </View>
    );
};

export default ItemList;
