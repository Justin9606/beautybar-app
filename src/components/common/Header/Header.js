import React from 'react';

//react-navigation-native
import {useNavigation} from '@react-navigation/native';

//styled
import styled from 'styled-components';

//styled components
import {
  ButtonWrap,
  RightContainer,
  LeftContainer,
  Container,
  AppNameWrap,
  HiUserName,
  AppNameText,
  CenterText,
} from './styled';

//Containers
import Row from '../../../containers/Row';
import Spacer from '../../../containers/Spacer';

//Small text
import Smalltext from '../Text/SmallText';

//svg
import BackButton from '../../../assets/svg/header/back_btn.svg';
import BackButtonWithTail from '../../../assets/svg/header/back_btn_has_tail.svg';
import Search from '../../../assets/svg/header/search_right.svg';
import WishList from '../../../assets/svg/header/wishlist.svg';
import Notification from '../../../assets/svg/header/notification_bell.svg';
import Home from '../../../assets/svg/header/home.svg';
import Cart from '../../../assets/svg/header/cart.svg';
import SmallSearch from '../../../assets/svg/header/small_search.svg';

const Header = ({
  back_with_rec_icon,
  back_with_text,
  skip_right,
  center_title,
  screen_title,
  search_right,
  search_left,
  wish_right,
  notif_right,
  marginBottom,
  appName,
  hiUserName,
  create_post,
  right_home,
  right_cart,
  small_right_search,
}) => {
  const navigation = useNavigation();

  return (
    <Container marginBottom={marginBottom}>
      <LeftContainer>
        {back_with_rec_icon === 'back_with_rec_icon' && (
          <ButtonWrap onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <BackButton />
          </ButtonWrap>
        )}
        {back_with_rec_icon === 'back_with_tail_icon' && (
          <ButtonWrap
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            style={{paddingBottom: 7}}>
            <BackButtonWithTail />
          </ButtonWrap>
        )}
        {appName === 'appName' && (
          <AppNameWrap>
            <HiUserName>{hiUserName}</HiUserName>
            <AppNameText>Discover your Beauty</AppNameText>
          </AppNameWrap>
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

        {search_left === 'search_left' && (
          <ButtonWrap
            onPress={() => alert('Search Icon Clicked')}
            activeOpacity={0.7}>
            <Search />
          </ButtonWrap>
        )}
      </LeftContainer>
      {center_title === 'has_screen_title' && (
        <CenterText>{screen_title}</CenterText>
      )}

      <RightContainer>
        {skip_right === 'skip' && (
          <ButtonWrap onPress={() => alert('Clicked Skip')} activeOpacity={0.7}>
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
          {create_post === 'create_post' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap
                onPress={() => navigation.navigate('Creatediscussion')}
                activeOpacity={0.7}>
                <CreatePostImg
                  source={require('../../../assets/icons/community/create_post.png')}
                />
              </ButtonWrap>
            </>
          )}
          {search_right === 'search_right' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap
                onPress={() => alert('Heart Icon Clicked')}
                activeOpacity={0.7}>
                <Search />
              </ButtonWrap>
            </>
          )}
          {small_right_search === 'small_right_search' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap
                onPress={() => alert('Heart Icon Clicked')}
                activeOpacity={0.7}>
                <SmallSearch />
              </ButtonWrap>
            </>
          )}
          {right_home === 'right_home' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap
                onPress={() => alert('Heart Icon Clicked')}
                activeOpacity={0.7}>
                <Home />
              </ButtonWrap>
            </>
          )}
          {right_cart === 'right_cart' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap
                onPress={() => alert('Heart Icon Clicked')}
                activeOpacity={0.7}>
                <Cart />
              </ButtonWrap>
            </>
          )}

          {wish_right === 'wishlist' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap
                onPress={() => alert('Heart Icon Clicked')}
                activeOpacity={0.7}>
                <WishList />
              </ButtonWrap>
            </>
          )}

          {notif_right === 'notification' && (
            <>
              <Spacer width={15.78} />
              <ButtonWrap
                onPress={() => alert('Notification Icon Clicked')}
                activeOpacity={0.7}>
                <Notification />
              </ButtonWrap>
            </>
          )}
        </Row>
      </RightContainer>
    </Container>
  );
};

export default Header;

const CreatePostImg = styled.Image`
  width: 30px;
  height: 30px;
`;
