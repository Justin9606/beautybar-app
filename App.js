import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import KeyboardManager from 'react-native-keyboard-manager';
import MainRoutes from './src/navigation';

const App = () => {
  // if (Platform.OS === 'ios') {
  //   KeyboardManager.setEnable(true);
  //   KeyboardManager.setKeyboardDistanceFromTextField(20);
  //   KeyboardManager.setToolbarDoneBarButtonItemText('Done');
  // }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
