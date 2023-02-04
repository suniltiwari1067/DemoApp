import * as React from 'react';
import { View } from 'react-native';
import { movieStyle } from './styles';
import FastImages from '../../components/fastImage';
import { Center, Text, VStack } from 'native-base';
import { MOVIE_IMAGE_BASE_URL } from '../../helpers/Constants'

const PMovieList = ({ item }) => {
    const { title, poster_path, id } = item;
    return (
        <View
            activeOpacity={0.6}
            style={movieStyle.itemContainer}
        //  key={id}
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
                        style={movieStyle.movieImage}                      
                        imageSource={{ uri: MOVIE_IMAGE_BASE_URL + poster_path }}
                        // imageSource={require('../../assets/images/unnamed.jpg')}
                        resizeMode={'contain'}
                    />
                    <Text numberOfLines={2} style={movieStyle.movieName}>
                        {title}
                    </Text>
                </Center>
            </VStack>
        </View>
    );
};

export default PMovieList;
