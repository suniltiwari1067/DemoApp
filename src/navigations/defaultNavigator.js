import React, { useEffect, useState, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/signIn/login';
import MenuNavigators from './menuNavigators'
import SplashScreen from "react-native-splash-screen";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'react-native';

const Stack = createStackNavigator();

const DefaultNavigator = () => {
    const [initialRoute, setInitialRoute] = useState("login");
    const { username } = useSelector(state => state.UserDetail);
    const appState = useRef(AppState.currentState);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                userLog();
            }
            appState.current = nextAppState;
        });

        return () => {
            subscription.remove();
        };
    }, []);

    const userLog = () => {
        if (username !== "") {
            setInitialRoute("menuNavigators")
        } else {
            setInitialRoute("login")
        }
    }

    useEffect(() => {
        SplashScreen.hide(); //hides the splash screen on app load.
    }, []);

    useEffect(() => {
        userLog();
    }, [username])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="menuNavigators" component={MenuNavigators} />
        </Stack.Navigator>
    );
}

export default DefaultNavigator;