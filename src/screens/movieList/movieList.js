import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    ActivityIndicator,
    Text,
    BackHandler
} from 'react-native';
import PMovieList from './pMovieList'
import { movieStyle } from './styles';
import { useSelector } from 'react-redux';
import { MOVIE_LIST_ENDPOINT } from '../../helpers/constants';
import { useTranslation } from 'react-i18next';

const MovieList = () => {
    const [loading, setLoading] = useState(false);
    const [loadMore, setloadMore] = useState(false);
    const [PMovieDataList, setPMovieDataList] = useState([]);
    const [offset, setOffset] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);
    const { currentLanguage } = useSelector(state => state.UserLanguage);
    const { t, i18n } = useTranslation();

    //call API
    useEffect(() => {
        if (loadMore) {
            getPMovieList();
        }
    }, [loadMore])

    useEffect(() => {
        getPMovieList();
    }, [])

    useEffect(() => {
        const backAction = () => {
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);

    //reset data
    // resetPriviousData = () => {
    //     setPMovieDataList([]);
    //     setOffset(1);
    //     setIsListEnd(false);
    //     setLoading(false);
    // }

    //fetch data
    const getPMovieList = () => {
        if (!loading && !isListEnd) {
            //.log(loading , isListEnd, loadMore)
            setLoading(true);
            let currentLang = (currentLanguage == "arabic" ? 'ar' : 'en');
            let url = MOVIE_LIST_ENDPOINT + currentLang + "&page=" + offset;
            //https://api.themoviedb.org/3/movie/popular?api_key=243554b2e4d28a562d1a603d655270bd&language=en-US&page=1

            // Sending the currect offset with get request
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    // Successful response from the API Call
                    if (responseJson && responseJson?.results.length > 0) {
                        setOffset(offset + 1);//increase page count
                        setPMovieDataList([...PMovieDataList, ...responseJson.results]);
                    } else {
                        setIsListEnd(true);
                    }
                })
                .catch((error) => {
                    //store error log
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false);
                    setloadMore(false)
                })
        }
    };

    //render footer
    const renderFooter = () => {
        return (
            <View style={movieStyle.footer}>
                {loadMore ? (
                    <ActivityIndicator
                        color="#2f3363"
                        style={{ margin: 15 }}
                        size={20}
                    />
                ) : null}
            </View>
        );
    };

    //render load more
    const onLoadMoreData = () => {
        console.log("onLoadMoreData called")
        setloadMore(true);
    }

    emptyRecord = () => {
        return (
            <View style={movieStyle.recordNotFoud}>
                <Text style={movieStyle.recordNotFoudTitle}>{t('norecordfound')} </Text>
            </View>
        )
    }

    movieLoading = () => {
        return (
            <View style={movieStyle.recordNotFoud}>
                <ActivityIndicator
                    color="#2f3363"
                    style={{ margin: 15 }}
                    size={30}
                />
                <Text style={movieStyle.recordNotFoudTitle}>{t('movieloading')} </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={movieStyle.container}>
            <View style={movieStyle.subContainer}>
                {
                    (PMovieDataList && PMovieDataList.length <= 0 && loading) ?
                        movieLoading() :
                        (PMovieDataList && PMovieDataList.length > 0) ?
                            (
                                <FlatList
                                    style={movieStyle.flatlistContainer}
                                    data={PMovieDataList}
                                    renderItem={({ item }) => (
                                        <PMovieList
                                            item={item}
                                        />
                                    )}
                                    numColumns={2}
                                    onEndReached={onLoadMoreData}
                                    onEndReachedThreshold={0.01}
                                    keyExtractor={item => item.id}
                                    scrollsToTop={true}
                                    ListFooterComponent={renderFooter}
                                />
                            ) :
                            emptyRecord()}
            </View>
        </SafeAreaView>
    );
};

export default MovieList;