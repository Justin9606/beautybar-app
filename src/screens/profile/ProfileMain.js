import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Header from '../../components/common/Header/Header';

const Profilemainpage = () => {
  console.log('HEIGHT ', StatusBar.currentHeight);
  return (
    <View>
      <StatusBar />
      <Header
        notif_right={'notification'}
        wish_right={'wishlist'}
        search_right={'search'}
      />
      <Text>Profile main page</Text>
    </View>
  );
};

export default Profilemainpage;
