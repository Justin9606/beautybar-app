import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../components/common/Header/Header';

const Profilemainpage = () => {
  return (
    <View>
        <Header notif_right={'notification'} wish_right={'wishlist'} search_right={'search'} />
      <Text>Profile main page</Text>
    </View>
  );
};



export default Profilemainpage;
