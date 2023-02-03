/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DefaultNavigator from './src/navigations/defaultNavigator';
import { extendTheme, NativeBaseProvider } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

FontAwesomeIcon.loadFont();
MaterialIcon.loadFont();

function App(): JSX.Element {
  return (
    <NavigationContainer
    // ref={navigationRef}
    // onReady={() => {
    //   routeNameRef.current = navigationRef.current.getCurrentRoute().name;
    // }}
    // onStateChange={async () => {
    //   const previousRouteName = routeNameRef.current;
    //   const currentRouteName = navigationRef.current.getCurrentRoute().name;

    //   if (previousRouteName !== currentRouteName) {
    //     analytics.logScreenView(currentRouteName);
    //   }
    //   routeNameRef.current = currentRouteName;
    // }}
    >
      <NativeBaseProvider>
        <Provider store={store}>
          <DefaultNavigator />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
export default App;
