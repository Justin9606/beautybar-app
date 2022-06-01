//react
import React from 'react';
//react native platform
import { Platform, TouchableOpacity ,View} from 'react-native';

//tab bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//rect-native-device-info
import Device from 'react-native-device-info';

//func to hide tab bar
import { getRouteName } from '../screens/logic/hidebottomtab';

//Svg
import HomeActive from '../assets/svg/tabBar/HomeActive.svg';
import Home from '../assets/svg/tabBar/Home.svg';
import FeedActive from '../assets/svg/tabBar/FeedActive.svg';
import Feed from '../assets/svg/tabBar/Feed.svg';
import ProductActive from '../assets/svg/tabBar/ProductActive.svg';
import Product from '../assets/svg/tabBar/Product.svg';
import ProfileActive from '../assets/svg/tabBar/ProfileActive.svg';
import Profile from '../assets/svg/tabBar/Profile.svg';
import CameraActive from '../assets/svg/tabBar/TryCameraonActive.svg'
import Camera from '../assets/svg/tabBar/CameraFull.svg'


//Screens
import HomeScreen from '../screens/home/Home';
import ProductStack from '../screens/product/ProductStack';
import ProfileMain from '../screens/profile/ProfileMain';
import CommunityStack from '../screens/community/CommunityStack';

const Tab = createBottomTabNavigator();


const CircleButton = ({ children, onpress }) => {
  return (
    <View>
    <View
      style={{
        width: 100,
        height: 100,
        top:-15,
        borderRadius:100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
      }}>
     
    <TouchableOpacity
      style={{
        top: -10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E74779',
        shadowColor: 'rgb(5, 7, 22)',
        margin:20,
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: 0.06,
        shadowRadius: 19,
        elevation: 5,
      }}>
      {children}
    </TouchableOpacity>
   
    </View>
  </View>
  )
}

const BottomTabs = () => {
  //checking DeviceModel
  const model = Device.getModel();

  const screenOptions = {
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarActiveTintColor: '#000',
    tabBarInactiveTintColor: '#FAF9F9',
    tabBarShowLabel: false,
    tabBarIconStyle: {
      paddingBottom: Platform.OS === 'android' || model === 'iPhone 8' ? 5 : 10,
    },

    tabBarStyle: {

      height: Platform.OS === 'android' || model === 'iPhone 8' ? 70 : 85,
      backgroundColor: '#fff',
      position: 'absolute',
      borderTopWidth: 0,
      shadowColor: 'rgb(5, 7, 22)',
      shadowOffset: {
        width: 0,
        height: -5,
      },
      shadowOpacity: 0.06,
      shadowRadius: 19,
      elevation: 5,

    },

  };

  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen

        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <>{focused ? <HomeActive /> : <Home />}</>;
          },
        }}
      />

      <Tab.Screen
        name={'Community'}
        component={CommunityStack}
        options={route => ({

          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>{focused ? <FeedActive /> : <Feed />}</>;
          },
          tabBarStyle: {
            display: getRouteName(route),
            height: Platform.OS === 'android' || model === 'iPhone 8' ? 70 : 85,
            backgroundColor: '#fff',
            position: 'absolute',
            borderTopWidth: 0,
            shadowColor: 'rgb(5, 7, 22)',
            marginRight:10,
            shadowOffset: {
              width: 0,
              height: -5,
            },
            shadowOpacity: 0.06,
            shadowRadius: 19,
            elevation: 5,
          },
        })}
      />
       <Tab.Screen
        name={'Communityee'}
        component={CommunityStack}
        options={route => ({
          tabBarButton: (props) => (<CircleButton {...props} />),
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>{focused ? <Camera /> : <Camera />}</>;
          },
          tabBarStyle: {
            display: getRouteName(route),
            height: Platform.OS === 'android' || model === 'iPhone 8' ? 70 : 85,
            backgroundColor: '#fff',
            position: 'absolute',
            borderTopWidth: 0,
            shadowColor: 'rgb(5, 7, 22)',
            marginRight:10,
            shadowOffset: {
              width: 0,
              height: -5,
            },
            shadowOpacity: 0.06,
            shadowRadius: 19,
            elevation: 5,
          },
        })}
      />


      {/* <Tab.Screen
        name={'Try On'}
        component={ProductStack}
        
          tabBarStyle: {
            display: getRouteName(route),
            height: Platform.OS === 'android' || model === 'iPhone 8' ? 70 : 85,
            backgroundColor: '#fff',
            position: 'absolute',
            borderTopWidth: 0,
            shadowColor: 'rgb(5, 7, 22)',
            marginRight:10,
            shadowOffset: {
              width: 0,
              height: -5,
            },
            shadowOpacity: 0.06,
            shadowRadius: 19,
            elevation: 5,
          },
        })}
        

      /> */}

      <Tab.Screen
        name={'Product'}
        component={ProductStack}
        options={route => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>{focused ? <ProductActive /> : <Product />}</>;
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
              height: -5,
            },
            shadowOpacity: 0.06,
            shadowRadius: 19,
            elevation: 5,
          },
        })}
      />

      <Tab.Screen
        name={'ProfileMain'}
        component={ProfileMain}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <>{focused ? <ProfileActive /> : <Profile />}</>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
