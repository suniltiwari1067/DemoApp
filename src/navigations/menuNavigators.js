import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/movieList/movieList';
import { DrawerActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../redux/userLanguages';
import { useTranslation } from 'react-i18next';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const MenuNavigators = (prop) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const logOut = () => {
  //  prop.navigation.navigate('login')
    prop.navigation.dispatch(StackActions.popToTop());
  }

  const logOutConfirmation = () => {
    Alert.alert('Confirmation', 'Are you sure you want to log out?', [

      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => { logOut() } },
    ]);
  }

  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <DrawerItemList {...props} />
          <DrawerItem
            label={t('updatelannguage')}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer())
              dispatch(openModal())
            }
            }
            icon={() =>
              <MaterialIcon name="language" size={20} />
            }
          />
        </View>
        <TouchableOpacity onPress={logOutConfirmation}>
          <View style={styles.item}>
            <View style={styles.iconContainer}>
              <MaterialIcon name="logout" size={20} />
            </View>
            <Text style={styles.label}>{t('logout')}</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#4a92e1'
      }}>
      <Drawer.Screen
        name={t('dashboard')}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcon name="home" size={20} />
          ),
        }}
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  label: {
    margin: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    // marginHorizontal: 16,
    //width: 24,
    alignItems: 'center',
    marginLeft: 16
  },
  icon: {
    width: 24,
    height: 24,
  }
});

const SignOutConfirmation = () => {

}


export default MenuNavigators;
