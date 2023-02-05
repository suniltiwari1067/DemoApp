import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/movieList/movieList';
import { DrawerActions } from '@react-navigation/native';
import { View, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/userLanguages';
import { useTranslation } from 'react-i18next';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';
import { Avatar, Text } from 'native-base';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { logOutSuccess } from '../redux/userDetails'

const Drawer = createDrawerNavigator();
const MenuNavigators = (prop) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { username ,loginTime} = useSelector(state => state.UserDetail);

  const logOutClick = () => {
    dispatch(logOutSuccess());//reset redux data
    prop.navigation.dispatch(StackActions.popToTop());//reset stack data
  }

  const logOutConfirmation = () => {
    Alert.alert(t('confirmation'), t('areyousurewanttologout'), [
      {
        text: t('cancel'),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: t('ok'), onPress: () => { logOutClick() } },
    ]);
  }

  const profileView = () => {
    return (
      <View style={styles.profile}>
        <View style={styles.profilePictureContainer}>
          <Avatar
            bg="#4a92e1"
            size={20}
          >
            {username.slice(0, 1).toUpperCase()}
          </Avatar>
        </View>
        <View style={styles.profilePictureNameContainer}>
          <Text style={styles.profileLabel} numberOfLines={2}>{username}</Text>
          <Text style={styles.profileLabel} numberOfLines={2}>{`${t('lastloginat')} - \n${loginTime}`}</Text>
        </View>
      </View>
    )
  }

  const logOutView = () => {
    return (
      <TouchableOpacity onPress={logOutConfirmation} style={styles.profileLogoutContainer}>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <MaterialIcon name="logout" size={20} />
          </View>
          <Text style={styles.logoutLabel}>{t('logout')}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        {profileView()}
        <View style={{ justifyContent: 'flex-start', flex: 6 }}>
          <DrawerItemList {...props} />
          <DrawerItem
            label={t('updatelannguage')}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer())
              dispatch(openModal())
            }
            }
            icon={({ color, size }) =>
              <View style={{ marginRight: -20 }}>
                <MaterialIcon name="language" size={size} />
              </View>
            }
            labelStyle={styles.menuLabel}
          />
        </View>
        {logOutView()}
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#4a92e1',
      }}>
      <Drawer.Screen
        name={t('dashboard')}
        options={{
          drawerIcon: ({ color, size }) => (
            <View style={{ marginRight: -20 }}>
              <MaterialIcon name="home" size={size} />
            </View>
          ),
          drawerLabelStyle: styles.menuLabel
        }}
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
};

export default MenuNavigators;
