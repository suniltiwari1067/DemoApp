import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/signIn/login';
import movieList from '../screens/movieList/movieList';


const Stack = createStackNavigator();

const DefaultNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="movielist" component={movieList} />
        </Stack.Navigator>
    );
}

export default DefaultNavigator;