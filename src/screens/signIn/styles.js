
import { StyleSheet } from 'react-native';
export const signInStyle = StyleSheet.create({
    dropdown: {
        position: 'absolute',
        top: 20,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        justifyContent: "center",
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-around'
    },
    gradientColor: [
        '#4a92e1',
        '#4a92e1',
        '#2f3363'
    ],
    gradientContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginIcon: {
        paddingHorizontal: 5,
        paddingLeft: 10
    },
    container: {
        flex: 1
    },
    imageStyle: {
        width: '100%',
        height: 150,
    }
})