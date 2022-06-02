import React from 'react';

//flatlis from react native
import {FlatList} from 'react-native';
//fast Image
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import Header from '../../../components/common/Header/Header';
import Viewcontainer from '../../../containers/ViewContainer';

import Avatar1 from '../../../assets/icons/tempnftavatar/avatar1.jpeg';
import Avatar2 from '../../../assets/icons/tempnftavatar/avatar2.png';
import Avatar3 from '../../../assets/icons/tempnftavatar/avatar3.png';
import Avatar4 from '../../../assets/icons/tempnftavatar/avatar4.png';
import Avatar5 from '../../../assets/icons/tempnftavatar/avatar5.png';
import Avatar6 from '../../../assets/icons/tempnftavatar/avatar6.png';
import Avatar7 from '../../../assets/icons/tempnftavatar/avatar7.png';
import Avatar8 from '../../../assets/icons/tempnftavatar/avatar8.png';
import Avatar9 from '../../../assets/icons/tempnftavatar/avatar9.png';

//lock
import Lock from '../../../assets/icons/tempnftavatar/lock.svg';
//spacer
import Spacer from '../../../containers/Spacer';

const data = [
  {
    id: 1,
    image: Avatar1,
  },
  {
    id: 2,
    image: Avatar2,
  },
  {
    id: 3,
    image: Avatar3,
  },
  {
    id: 4,
    image: Avatar4,
  },
  {
    id: 5,
    image: Avatar5,
  },
  {
    id: 6,
    image: Avatar6,
  },
  {
    id: 7,
    image: Avatar7,
  },
  {
    id: 8,
    image: Avatar8,
  },
  {
    id: 9,
    image: Avatar9,
  },
];

const MakeupToEarn = () => {
  return (
    <Viewcontainer>
      <Header
        center_title={'has_screen_title'}
        screen_title="Makeup to Earn"
        back_with_rec_icon={'back_with_tail_icon'}
      />

      <FlatListWrap>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          data={data}
          columnWrapperStyle={{marginBottom: 20, top: 10}}
          renderItem={({item, index}) => {
            return (
              <FlatlistContainer activeOpacity={0.73}>
                <LockWrap>
                  <Lock />
                </LockWrap>
                <FastImage
                  source={item.image}
                  style={{
                    width: 168,
                    height: 213,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    overflow: 'hidden',
                    priority: FastImage.priority.high,
                  }}
                />
                <BtnWrap>
                  <Buttons>
                    <BtnText>299 SOL</BtnText>
                  </Buttons>
                  <Spacer width={10} />
                  <Buttons>
                    <BtnText>Buy</BtnText>
                  </Buttons>
                </BtnWrap>
              </FlatlistContainer>
            );
          }}
        />
      </FlatListWrap>
      <Spacer height={130} />
    </Viewcontainer>
  );
};

export default MakeupToEarn;
const FlatListWrap = styled.View`
  align-items: center;
  background-color: #fff;
`;
const FlatlistContainer = styled.TouchableOpacity`
  margin-horizontal: 10px;
  height: 268px;
  border-radius: 10px;
  elevation: 5;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
`;
const LockWrap = styled.View`
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 10px;
`;

const BtnWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
`;

const Buttons = styled.TouchableOpacity`
  border: 1px solid #e74779;
  border-radius: 20px;
  padding-horizontal: 15px;
  padding-vertical: 8px;
  justify-content: center;
`;

const BtnText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* Primary */

  color: #e74779;
`;
