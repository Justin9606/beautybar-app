import React from 'react';
import { Alert, Animated, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { styles } from './style'

//Svg
import HomeActive from '../assets/svg/tabBar/HomeActive.svg';
import Home from '../assets/svg/tabBar/Home.svg';
import FeedActive from '../assets/svg/tabBar/FeedActive.svg';
import Feed from '../assets/svg/tabBar/Feed.svg';
import ProductActive from '../assets/svg/tabBar/ProductActive.svg';
import Product from '../assets/svg/tabBar/Product.svg';
import TryCameraonActive from '../assets/svg/tabBar/TryCameraonActive.svg';
import TryCameraon from '../assets/svg/tabBar/TryCameraon.svg';
import ProfileActive from '../assets/svg/tabBar/ProfileActive.svg';
import Profile from '../assets/svg/tabBar/Profile.svg';


//Screens
import HomeScreen from '../screens/home/Home';
import Feedmainpage from '../screens/feed/FeedMainPage';
import Productmainpage from '../screens/product/ProductMainPage';
import Tryonmakeupmainpage from '../screens/tryonMakeup/TryonMakeupMainPage';
import Profilemainpage from '../screens/profile/ProfileMainPage';

export default function tabBar() {
    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';


        function returnDay(val) {
            switch (routeName) {
                case 'Home':
                    return routeName === selectedTab ? <HomeActive /> : <Home />
                case 'Feed':
                    return routeName === selectedTab ? <FeedActive /> : <Feed />
                case 'Product':
                    return routeName === selectedTab ? <ProductActive /> : <Product />
                case 'Profile':
                    return routeName === selectedTab ? <ProfileActive /> : <Profile />
            }
        }

        return (
            <>
                {returnDay()}
                <Text style={[styles.routnames, { color: routeName === selectedTab ? '#E74779' : '#000' }]}>{routeName}</Text>
            </>
        );
    };


    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <CurvedBottomBar.Navigator
                type="up"
                style={styles.bottomBar}
                strokeWidth={0.5}
                height={80}
                circleWidth={55}
                bgColor="white"
                initialRouteName="Home"

                swipeEnabled
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',

                            }}
                            onPress={() => Alert.alert('Click Action')}>
                            <TryCameraon />
                        </TouchableOpacity>
                    </Animated.View>
                )}

                tabBar={renderTabBar}>
                <CurvedBottomBar.Screen
                    name="Home"
                    position="left"
                    component={({ navigate }) => (
                        <HomeScreen />
                    )}
                />
                <CurvedBottomBar.Screen
                    name="Feed"
                    position="left"
                    component={({ navigate }) => (
                        <Feedmainpage />
                    )}
                />
                <CurvedBottomBar.Screen
                    name="Product"
                    component={({ navigate }) => (
                        <Productmainpage />
                    )}
                    position="right"
                />
                <CurvedBottomBar.Screen
                    name="Profile"
                    component={({ navigate }) => (
                        <Profilemainpage />
                    )}
                    position="right"
                />
            </CurvedBottomBar.Navigator>

        </View>
    );
};

