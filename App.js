/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DefaultNavigator from './src/navigations/defaultNavigator';
import { extendTheme, NativeBaseProvider } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { LanguageModal } from './src/helpers/languageModal';

//load fonts
FontAwesomeIcon.loadFont();
MaterialIcon.loadFont();

const App = () => {
  // const routeNameRef = React.useRef();
  // const navigationRef = React.useRef();

  return (
    <NavigationContainer
      // ref={navigationRef}
      // onReady={() => {
      //   routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      // }}
      // onStateChange={async () => {
      //   const previousRouteName = routeNameRef.current;
      //   const currentRouteName = navigationRef.current.getCurrentRoute().name;
      //   // if (previousRouteName !== currentRouteName) {
      //   //   //  analytics.logScreenView(currentRouteName);
      //   // }
      //    routeNameRef.current = "siign";
      // }}
    >
      <NativeBaseProvider>
        <Provider store={store}>
          <DefaultNavigator />
          <LanguageModal />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
export default App;
