import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import KeyboardManager from 'react-native-keyboard-manager';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store/store';

import MainRoutes from './navigation/routes';
import './i18next/i18next';

//react-i18next
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t} = useTranslation();

  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setKeyboardDistanceFromTextField(20);
    KeyboardManager.setToolbarDoneBarButtonItemText(t('keyboarManagerDone'));
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} f>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <MainRoutes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
