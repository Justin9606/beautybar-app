import React from 'react';

//react-navigation-native
import {useNavigation} from '@react-navigation/native';

//styled components
import {ButtonWrap, RightContainer, LeftContainer, Container} from './styled';

//Containers
import Row from '../../../containers/Row';
import Spacer from '../../../containers/Spacer';

//Small text
import Smalltext from '../Text/SmallText';

import BackButton from '../../../assets/svg/header/back_btn.svg';
import Search from '../../../assets/svg/header/search_right.svg';
import WishList from '../../../assets/svg/header/wishlist.svg';
import Notification from '../../../assets/svg/header/notification_bell.svg';

const Header = ({
  back_with_rec_icon,
  back_with_text,
  skip_right,
  center_title,
  search_right,
  search_left,
  wish_right,
  notif_right,
  marginBottom,
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
          <ButtonWrap
            onPress={() => alert('Search Icon Clicked')}
            activeOpacity={0.7}>
            <Search />
          </ButtonWrap>
        )}
      </LeftContainer>

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
          {search_left === 'search_left' && (
            <>
              <Spacer width={16.98} />
              <ButtonWrap
                onPress={() => alert('Heart Icon Clicked')}
                activeOpacity={0.7}>
                <Search />
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
