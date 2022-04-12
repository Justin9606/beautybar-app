//react
import React, {useState} from 'react';

//react native
import {FlatList, useWindowDimensions} from 'react-native';

//styled
import styled from 'styled-components';

//containers
import ScrollableView from '../../containers/ScrollableView';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import Spacer from '../../containers/Spacer';
import Row from '../../containers/Row';
import Column from '../../containers/Column';

//common components
import Header from '../../components/common/Header/Header';

//temp pic
import UserProfilePic from '../../assets/icons/temp/user_profile_pic.png';

const postData = [
  {
    name: 'Beauty Bar',
    time: '2 min ago',
    descr:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',

    postImg: require('../../assets/icons/temp/postmainimg.png'),
    like: 12,
    comment: 5,
  },
  {
    name: 'Love Bar',
    time: '2 min ago',
    descr:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    postImg: require('../../assets/icons/temp/postmainimg.png'),
    like: 7,
    comment: 8,
  },
  {
    name: 'Soap Bar',
    time: '20 min ago',
    descr:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    postImg: require('../../assets/icons/temp/postmainimg.png'),
    like: 13,
    comment: 89,
  },
  {
    name: 'Lux Bar',
    time: '2 min ago',
    descr: 'Amet minim mollit non deserunt',
    postImg: require('../../assets/icons/temp/postmainimg.png'),
    like: 500,
    comment: 300,
  },
];

const CommunityMain = ({}) => {
  const height = useWindowDimensions().height;
  const [tagSelected, setTagSelected] = useState(0);

  const tagsData = [
    {
      id: 0,
      tag: 'All',
    },
    {
      id: 1,
      tag: 'Lips',
    },
    {
      id: 2,
      tag: 'Question',
    },
    {
      id: 3,
      tag: 'Oily-Skin',
    },
  ];
  return (
    <>
      <Header
        center_title={'has_screen_title'}
        screen_title="Community"
        notif_right={'notification'}
        search_right={'search'}
        create_post={'create_post'}
      />
      <TagsWrap>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={tagsData}
          renderItem={({item, index}) => {
            return (
              <TagsBtn
                index={index}
                activeOpacity={0.7}
                onPress={() => setTagSelected(index)}>
                <TagsText>{item.tag}</TagsText>
              </TagsBtn>
            );
          }}
        />
      </TagsWrap>
      <ScrollableView
        paddingHorizontal={24}
        showsVerticalScrollIndicator={false}>
        <Spacer height={32} />
        <FlatList
          scrollEnabled={false}
          data={postData}
          renderItem={({item, index}) => {
            return (
              <>
                <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                  <UserProfile source={UserProfilePic} />
                  <Spacer width={16} />
                  <Column alignItems={'flex-start'}>
                    <PostUserName>{item.name}</PostUserName>
                    <PostTime>{item.time}</PostTime>
                  </Column>
                  <FollowBtnWrap activeOpacity={0.7}>
                    <FollowText>Follow</FollowText>
                  </FollowBtnWrap>
                </Row>
                <PostDescript>{item.descr}</PostDescript>
                <PostMainImg
                  source={item.postImg}
                  style={{height: height / 4.2}}
                />
              </>
            );
          }}
        />
      </ScrollableView>
    </>
  );
};

export default CommunityMain;

const TagsWrap = styled.View`
  justify-content: center;
  padding: 5px 0px 10px 0px;
  background-color: white;
`;

const TagsBtn = styled.TouchableOpacity`
  background-color: ${props => (props.index === 0 ? '#e74779' : '#fff')};
  margin-left: ${props => (props.index === 0 ? 24 : 0)}px;
  margin-right: 10px;
  padding: 8px 14px;
  border-radius: 32px;
  border-width: 1px;
  border-color: #faebf1;
  justify-content: center;
  align-items: center;
`;

const TagsText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${props => (props.index === 0 ? '#fff' : '#323234')};
`;

const UserProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const PostUserName = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  color: #323234;
`;

const PostTime = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #7f7e83;
`;
const PostDescript = styled.Text`
  margin-top: 24px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #323234;
`;

const PostMainImg = styled.Image`
  align-self: center;
  justify-content: center;
  margin-top: 24px;
  width: 100%;
  margin-bottom: 20.5px;
  border-radius: 2px;
`;

const FollowBtnWrap = styled.TouchableOpacity`
  /* width: 8px; */
  padding-horizontal: 10px;
  height: 33px;
  border: 1px solid #e74779;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  align-self: center;
  position: absolute;
  right: 0;
`;

const FollowText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #e74779;
`;
