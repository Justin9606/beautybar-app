import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
//react-navigation-native
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';
//styled components
import { DownArrow, LangText, LangWrap, ButtonWrap, RightContainer, LeftContainer, Container } from './styled';


//Containers
import Row from '../../containers/Row';
import Spacer from '../../containers/Spacer';

//Small text
import Smalltext from '../Text/SmallText';

import BackButton from '../../../assets/svg/header/back_btn.svg';
import Search from '../../../assets/svg/header/search_right.svg';
import WishList from '../../../assets/svg/header/wishlist.svg';
import Notification from '../../../assets/svg/header/notification_bell.svg';
import DownArrowImage from '../../../assets/icons/arrow_down.png';


console.log('Notification==>', Notification)

const Header = ({
  back_with_rec_icon,
  back_with_text,
  skip_right,
  center_title,
  search_right,
  wish_right,
  notif_right,
  lang_select_left,
  onPressLang,
  marginBottom,
}) => {
  const navigation = useNavigation();
  const modalizeRef = useRef < Modalize > (null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <Container marginBottom={marginBottom}>

      <LeftContainer>
        {back_with_rec_icon === 'back_with_rec_icon' && (
          <ButtonWrap onPress={() => navigation.goBack()}>
            <BackButton />
          </ButtonWrap>
        )}
        {back_with_text === 'back_with_text' && (
          <ButtonWrap onPress={() => navigation.goBack()}>
            <Smalltext
              title="Back"
              color={'#7F7E83'}
              textAlign={'center'}
              width={36}
              height={17}
              fontWeight={600}
            />
          </ButtonWrap>
        )}

        {search_right === 'search' && (
          <ButtonWrap onPress={() => alert('Search Icon Clicked')}>
            <Search />
          </ButtonWrap>
        )}

        {lang_select_left === 'language' && (
          <LangWrap
            onPress={onPressLang}
            activeOpacity={0.7}
            underlayColor="#DDDDDD">
            <>
              <LangText onOpen={onOpen}>English</LangText>
              <DownArrow source={DownArrowImage} />
            </>
          </LangWrap>
        )}
      </LeftContainer>

      <RightContainer>
        {skip_right === 'skip' && (
          <ButtonWrap onPress={() => alert('Clicked Skip')}>
            <Smalltext
              title="Skip"
              color={'#e74779'}
              textAlign={'center'}
              width={31}
              height={17}
              fontWeight={600}
            />
          </ButtonWrap>
        )}
        <Row>
          {wish_right === 'wishlist' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap onPress={() => alert('Heart Icon Clicked')}>
                <WishList />
              </ButtonWrap>
            </>
          )}

          {notif_right === 'notification' && (
            <>
              <Spacer width={15.78} />
              <ButtonWrap onPress={() => alert('Notification Icon Clicked')}>
                <Notification />
              </ButtonWrap>
            </>
          )}
        </Row>
      </RightContainer>


    </Container>

  );
};

export default Header


