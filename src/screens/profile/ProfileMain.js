import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/common/Header/Header';

import {useDispatch} from 'react-redux';
import {LogOutUser} from '../../store/reducer/reducer';

const Profilemainpage = () => {
  console.log('HEIGHT ', StatusBar.currentHeight);
  const dispatch = useDispatch();
  return (
    <View>
      <StatusBar />
      <Header
        notif_right={'notification'}
        wish_right={'wishlist'}
        search_right={'search'}
      />
      <Text>Profile main page</Text>

      <TouchableOpacity onPress={() => dispatch(LogOutUser())}>
        <Text>LOGOUT ME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profilemainpage;
