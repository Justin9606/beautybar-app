import React, {useMemo} from 'react';
import {Alert, Animated, TouchableOpacity, Platform, View} from 'react-native';

//react-native-curved-bottom-bar
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

//styles
import {styles} from './style';

//rect-native-device-info
import Device from 'react-native-device-info';

//Svg
import HomeActive from '../assets/svg/tabBar/HomeActive.svg';
import Home from '../assets/svg/tabBar/Home.svg';
import FeedActive from '../assets/svg/tabBar/FeedActive.svg';
import Feed from '../assets/svg/tabBar/Feed.svg';
import ProductActive from '../assets/svg/tabBar/ProductActive.svg';
import Product from '../assets/svg/tabBar/Product.svg';
import TryCameraon from '../assets/svg/tabBar/TryCameraon.svg';
import ProfileActive from '../assets/svg/tabBar/ProfileActive.svg';
import Profile from '../assets/svg/tabBar/Profile.svg';

//Screens
import HomeScreen from '../screens/home/Home';
import Feedmainpage from '../screens/community/FeedMainScreen';
import ProductMain from '../screens/product/ProductMain';
import Profilemainpage from '../screens/profile/ProfileMain';

const TabBar = () => {
  const _renderIcon = (routeName, selectedTab) => {
    function returnDay(val) {
      switch (routeName) {
        case 'Home':
          return routeName === selectedTab ? <HomeActive /> : <Home />;
        case 'Community':
          return routeName === selectedTab ? <FeedActive /> : <Feed />;
        case 'Product':
          return routeName === selectedTab ? <ProductActive /> : <Product />;
        case 'Profile':
          return routeName === selectedTab ? <ProfileActive /> : <Profile />;
      }
    }

    return (
      <>
        {returnDay()}
        {/* <Text
          style={[
            styles.routnames,
            {
              color: routeName === selectedTab ? '#000' : '#B1B1B1',
              justifyContent: 'center',
              alignSelf: 'center',
            },
          ]}>
          {routeName}
        </Text> */}
      </>
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom:
            Platform.OS === 'android' || model === 'iPhone 8' ? 10 : 25,
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  //checking DeviceModel
  const model = Device.getModel();
  const renderMain = useMemo(() => {
    return (
      <View style={{flex: 1}}>
        <CurvedBottomBar.Navigator
          type="up"
          style={styles.bottomBar}
          strokeWidth={0.12}
          height={Platform.OS === 'android' || model === 'iPhone 8' ? 70 : 85}
          circleWidth={55}
          bgColor="white"
          initialRouteName="Home"
          swipeEnabled={false}
          renderCircle={({selectedTab, navigate}) => (
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
            component={({navigate}) => <HomeScreen />}
          />

          <CurvedBottomBar.Screen
            name="Community"
            position="left"
            component={({navigate}) => <Feedmainpage />}
          />
          <CurvedBottomBar.Screen
            name="Product"
            component={({navigate}) => <ProductMain />}
            position="right"
          />
          <CurvedBottomBar.Screen
            name="Profile"
            component={({navigate}) => <Profilemainpage />}
            position="right"
          />
        </CurvedBottomBar.Navigator>
      </View>
    );
  }, []);
  return <View style={{flex: 1, backgroundColor: 'red'}}>{renderMain}</View>;
};

export default TabBar;
