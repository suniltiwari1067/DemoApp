import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import ItemList from './itemList'
import { movieStyle } from './styles';
import Header from '../../components/header'

const mockData = {
    "products":
        [{ "id": 11, "title": "perfume Oil", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg" }, { "id": 12, "title": "Brown Perfume", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg" }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp" }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg" }, { "id": 15, "title": "Eau De Perfume Spray", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg" }, { "id": 16, "title": "Hyaluronic Acid Serum", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg" }, { "id": 17, "title": "Tree Oil 30ml", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg" }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg" }, { "id": 19, "title": "Skin Beauty Serum.", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg" }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg" }],
    "total": 100, "skip": 10, "limit": 10
}

const MovieList = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [offset, setOffset] = useState(10);
    const [isListEnd, setIsListEnd] = useState(false);

    useEffect(() => {
        setDataSource(mockData)
    }, [])

    const getData = () => {
        console.log(offset);
        if (!loading && !isListEnd) {
            console.log('getData');
            setLoading(true);
            console.log("UURL >>>>>", `https://dummyjson.com/products?limit=10&skip=${offset}&select=title,thumbnail`)
            // Service to get the data from the server to render
            fetch(`https://dummyjson.com/products?limit=10&skip=${offset}&select=title,thumbnail`)
                // Sending the currect offset with get request
                .then((response) => response.json())
                .then((responseJson) => {
                    // Successful response from the API Call
                    console.log(responseJson);
                    if (responseJson.length > 0) {
                        setOffset(offset + 10);
                        // After the response increasing the offset
                        setDataSource([...dataSource, ...responseJson]);
                        setLoading(false);
                    } else {
                        setIsListEnd(true);
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.error("error >>>>>>>>>>>>>>>", error);
                });
        }
    };

    const renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={styles.footer}>
                {loading ? (
                    <ActivityIndicator
                        color="black"
                        style={{ margin: 15 }} />
                ) : null}
            </View>
        );
    };

    const ItemView = ({ item }) => {
        console.log("item >>>>>>>>>>>>>>>", item)
        return (
            // Flat List Item
            <Text>{item.title}</Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header/>
            <View style={styles.subContainer}>
                <FlatList
                    style={movieStyle.flatlistContainer}
                    data={mockData.products}
                    renderItem={({ item }) => (
                        <ItemList
                            item={item}
                        />
                    )}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default MovieList;