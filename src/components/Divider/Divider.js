import React from 'react';
import {View} from 'react-native';

export default function Divider({backgroundColor}) {
  return (
    <View
      style={{width: '100%', backgroundColor, height: 2.5, marginTop: 10}}
    />
  );
}
