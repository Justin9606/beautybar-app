import React from 'react';
import {useWindowDimensions} from 'react-native';
//react navigation/native
import {useNavigation} from '@react-navigation/native';
//webView
import {WebView} from 'react-native-webview';
import styled from 'styled-components/native';

//containers
import ScrollableView from '../../containers/ScrollableView';
import SafeAreaContainer from '../../containers/SafeAreaContainer';

//png images
import LiveOn from '../../assets/icons/temp/liveOn.png';
import MakeupToEarn from '../../assets/icons/temp/makeupToEarn.png';
import TrendMakeupSet from '../../assets/icons/temp/trendMakeupSet.png';

const TryOnMakeupBtn = ({onPress, source}) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  return (
    <BodyWrapper activeOpacity={0.7} onPress={onPress}>
      <Images source={source} height={height} width={width} />
    </BodyWrapper>
  );
};

const TryOnMakeUpMainPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <ScrollableView>
        <TryOnMakeupBtn
          source={LiveOn}
          onPress={() => navigation.navigate('LiveOnMakeUp')}
        />
        <TryOnMakeupBtn
          source={MakeupToEarn}
          onPress={() => navigation.navigate('MakeupToEarn')}
        />
        <TryOnMakeupBtn source={TrendMakeupSet} />
      </ScrollableView>
    </SafeAreaContainer>
  );
};

export default TryOnMakeUpMainPage;

const BodyWrapper = styled.TouchableOpacity`
  align-items: center;
`;

const Images = styled.Image`
  width: ${props => props.width}px;
  height: 180px;
`;
