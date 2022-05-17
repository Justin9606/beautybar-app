//react
import React, { useState } from 'react';

//react native
import { FlatList, useWindowDimensions } from 'react-native';

//styled
import styled from 'styled-components';

//containers
import ScrollableView from '../../containers/ScrollableView';
import Spacer from '../../containers/Spacer';
import Row from '../../containers/Row';
import Column from '../../containers/Column';

//common components
import Header from '../../components/common/Header/Header';

//community components
import PostBottomBtns from './components/PostBottomBtns';

//Slider
import ImageSlider from '../../components/ImageSlider/ImageSlider';


const postData = [
  {
    user_pic: require('../../assets/icons/temp/user_profile_pic.png'),
    name: 'Beauty Bar',
    time: '2 min ago',
    descr:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',

    postImg: '',
    like: 12,
    comment: 5,
  },
  {
    user_pic: '',
    name: 'Justin',
    time: '2 min ago',
    descr:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    postImg: [
      { url: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807383.png?token=exp=1652703846~hmac=c847b1053703359c973a984be7c9dfde' },
      { url: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807383.png?token=exp=1652703846~hmac=c847b1053703359c973a984be7c9dfde' }
    ],
    like: 7,
    comment: 8,
  },
  {
    user_pic: require('../../assets/icons/temp/user_profile_pic.png'),
    name: 'Soap Bar',
    time: '20 min ago',
    descr:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    postImg: [ { url: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807383.png?token=exp=1652703846~hmac=c847b1053703359c973a984be7c9dfde' }],
    like: 13,
    comment: 89,
  },
  {
    user_pic: require('../../assets/icons/temp/user_profile_pic.png'),
    name: 'Lux Bar',
    time: '2 min ago',
    descr: 'Amet minim mollit non deserunt',
    postImg: [
      { url: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807383.png?token=exp=1652703846~hmac=c847b1053703359c973a984be7c9dfde' },
      { url: 'https://cdn-icons.flaticon.com/png/512/1807/premium/1807383.png?token=exp=1652703846~hmac=c847b1053703359c973a984be7c9dfde' }
    ],    like: 500,
    comment: 300,
  },
];

const CommunityMain = ({ }) => {
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
          renderItem={({ item, index }) => {
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
          renderItem={({ item, index }) => {
            console.log('item?.postImg', item?.postImg)
            return (
              <>
                <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                  {item?.user_pic !== '' ? (
                    <UserProfile source={item?.user_pic} />
                  ) : (
                    <DefaultUserPicWrap>
                      <DefaultUserPicText>
                        {item.name.charAt(0) +
                          item.name.charAt(item.name.length - 1).toUpperCase()}
                      </DefaultUserPicText>
                    </DefaultUserPicWrap>
                  )}
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
                {item?.postImg !== '' ? (
                  // <PostMainImg
                  //   source={item?.postImg}
                  //   style={{height: height / 4.2}}
                  // />
                  <ImageSlider images={item?.postImg} />

                ) : (
                  <Spacer height={10.25} />
                )}

                <Wrapper>
                  <PostBottomBtns
                    itsLike={'itsLike'}
                    count={item.like}
                    onPress={() => alert('Like Pressed')}
                  />
                  <Spacer width={20.83} />
                  <PostBottomBtns
                    itsComment={'itsComment'}
                    count={item.comment}
                    onPress={() => alert('Comment Pressed')}
                  />
                </Wrapper>
                <PostBottomBtns
                  itsthreeDots={'itsthreeDots'}
                  onPress={() => alert('3 DOTS Pressed')}
                />
                <Spacer height={25.5} />
              </>
            );
          }}
        />
        {/* WILL BE REMOVED */}
        <Spacer height={100} />
        {/* WILL BE REMOVED */}
      </ScrollableView>
    </>
  );
};

export default CommunityMain;

const Wrapper = styled.View`
  flex-direction: row;
`;

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

const DefaultUserPicWrap = styled.View`
  background-color: #e74779;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const DefaultUserPicText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;

  opacity: 0.9;
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
