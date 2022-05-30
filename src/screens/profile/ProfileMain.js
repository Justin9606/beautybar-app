import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/common/Header/Header';

import {useDispatch, useSelector} from 'react-redux';
import {LogOutUser} from '../../store/reducer/auth_reducer/Auth_Reducer';

const Profilemainpage = () => {
  const User = useSelector(state => {
    return state?.persistedReducer?.AuthReducer?.UserDetail;
  });
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
      <Text>NAME : {User?.name}</Text>
      <Text>AGE : {User?.age}</Text>

      <TouchableOpacity onPress={() => dispatch(LogOutUser(false))}>
        <Text>LOGOUT ME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profilemainpage;
