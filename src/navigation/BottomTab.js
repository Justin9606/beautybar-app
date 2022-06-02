//react
import React from 'react';
//react native platform
import {Platform} from 'react-native';

//tab bar
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//rect-native-device-info
import Device from 'react-native-device-info';

//func to hide tab bar
import {getRouteName} from '../screens/logic/hidebottomtab';

//Svg
import HomeActive from '../assets/svg/tabBar/HomeActive.svg';
import Home from '../assets/svg/tabBar/Home.svg';
import FeedActive from '../assets/svg/tabBar/FeedActive.svg';
import Feed from '../assets/svg/tabBar/Feed.svg';
import ProductActive from '../assets/svg/tabBar/ProductActive.svg';
import Product from '../assets/svg/tabBar/Product.svg';
import ProfileActive from '../assets/svg/tabBar/ProfileActive.svg';
import Profile from '../assets/svg/tabBar/Profile.svg';

import TryOnCamera from '../assets/svg/tabBar/curvedTryOnIcon.svg';

//Screens
import HomeScreen from '../screens/home/Home';
import ProductStack from '../screens/product/ProductStack';
import ProfileMain from '../screens/profile/ProfileMain';
import CommunityStack from '../screens/community/CommunityStack';
import TryOnMakeupStack from '../screens/tryonMakeup/TryOnMakeupStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  //checking DeviceModel
  const model = Device.getModel();

  const screenOptions = route => ({
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarActiveTintColor: '#000',
    tabBarInactiveTintColor: '#FAF9F9',

    tabBarShowLabel: false,
    tabBarIconStyle: {
      paddingBottom: Platform.OS === 'android' || model === 'iPhone 8' ? 5 : 10,
    },

    tabBarStyle: {
      display: getRouteName(route),
      height: Platform.OS === 'android' || model === 'iPhone 8' ? 70 : 85,
      backgroundColor: '#fff',
      position: 'absolute',
      borderTopWidth: 0,
      shadowColor: 'rgb(5, 7, 22)',
      shadowOffset: {
        width: 0,
        height: -8,
      },
      shadowOpacity: 0.07,
      shadowRadius: 19,
      elevation: 5,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <>{focused ? <HomeActive /> : <Home />}</>;
          },
        }}
      />

      <Tab.Screen
        name={'Community'}
        component={CommunityStack}
        options={route => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <>{focused ? <FeedActive /> : <Feed />}</>;
          },
        })}
      />
      <Tab.Screen
        name={'TryOnMakeup'}
        component={TryOnMakeupStack}
        options={route => ({
          headerShown: false,

          tabBarIconStyle: {marginBottom: 24},
          tabBarIcon: ({focused}) => {
            return <>{focused ? <TryOnCamera /> : <TryOnCamera />}</>;
          },
        })}
      />

      <Tab.Screen
        name={'Product'}
        component={ProductStack}
        options={route => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <>{focused ? <ProductActive /> : <Product />}</>;
          },
        })}
      />

      <Tab.Screen
        name={'ProfileMain'}
        component={ProfileMain}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <>{focused ? <ProfileActive /> : <Profile />}</>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
