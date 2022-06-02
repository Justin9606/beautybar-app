import React from 'react';
import {useWindowDimensions} from 'react-native';

//webView
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';

//common components
import Header from '../../../components/common/Header/Header';
//containers
import ScrollableView from '../../../containers/ScrollableView';
import Viewcontainer from '../../../containers/ViewContainer';

const LiveOnMakeUpScreen = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
    <Viewcontainer>
      <Header
        center_title={'has_screen_title'}
        screen_title="Try on Makeup"
        back_with_rec_icon={'back_with_tail_icon'}
      />
      <ScrollableView>
        <WebView
          source={{
            uri: 'https://beachsandsoft.cafe24.com/beautybar.php',
          }}
          style={{height: height, width: width}}
          originWhitelist={['*']}
          allowsInlineMediaPlayback={true}
          allowsFullscreenVideo={true}
          javaScriptEnabled={true}
          scalesPageToFit
          startInLoadingState
          javaScriptEnabledAndroid
          useWebkit
          domStorageEnabled={true}
        />
      </ScrollableView>
    </Viewcontainer>
  );
};

export default LiveOnMakeUpScreen;
