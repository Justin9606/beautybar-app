//react
import React, {useState} from 'react';

//react native
import {FlatList, useWindowDimensions} from 'react-native';

//styled
import styled from 'styled-components';

//containers
import ScrollableView from '../../containers/ScrollableView';
import Spacer from '../../containers/Spacer';
import Row from '../../containers/Row';
import Column from '../../containers/Column';

//common components
import Header from '../../components/common/Header/Header';
import ProductTitle from '../../components/common/Text/ProductTitle';
import ProductBrand from '../../components/common/Text/ProductBrand';
import ProductLink from '../../components/common/Text/ProductLink';
import ProductDescription from '../../components/common/Text/ProductDescription';

//community components
import PostBottomBtns from './components/PostBottomBtns';

//Slider
import ImageSlider from '../../components/ImageSlider/ImageSlider';

import {postData} from '../../components/svg_data/skin_data';

import LinkedProductImg from '../../assets/temp/product_10.png';

const CommunityMain = ({}) => {
  const height = useWindowDimensions().height;
  const [tagSelected, setTagSelected] = useState(0);
  const [update, setUpdate] = useState(false);

  const SortedData = postData?.sort(
    (a, b) => new Date(b.createrdatetime) - new Date(a.createrdatetime),
  );

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
        setUpdate={setUpdate}
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
          data={SortedData}
          extraData={update}
          renderItem={({item, index}) => {
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
                <PostDescription>{item.descr}</PostDescription>
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
                <TaggedProductsWrapper>
                  {item?.TagProduct !== undefined ? (
                    <>
                      {item?.TagProduct?.map((value, i) => {
                        console.log('VLAU IMAGE', value);
                        return (
                          <TaggedProductsRenderWrap activeOpacity={0.7} key={i}>
                            <TaggedProductsImg
                              source={value?.img}
                              resizeMode="contain"
                            />
                            <Spacer width={10} />
                            <Column alignItems={'flex-start'}>
                              <Spacer height={5} />
                              <ProductTitle
                                title={value?.name || 'No Title'}
                                ellipsizeMode={'tail'}
                                numberOfLines={1}
                              />
                              <ProductBrand
                                brand={value?.brandType}
                                ellipsizeMode={'tail'}
                                numberOfLines={1}
                              />
                              <ProductLink
                                link={value?.link}
                                ellipsizeMode={'tail'}
                                numberOfLines={1}
                              />
                              <ProductDescription
                                description={value?.description}
                                ellipsizeMode={'tail'}
                                numberOfLines={1}
                              />
                            </Column>
                            <Spacer width={10} />
                          </TaggedProductsRenderWrap>
                        );
                      })}
                    </>
                  ) : // <FlatList
                  //   horizontal={true}
                  //   showsHorizontalScrollIndicator={false}
                  //   data={item?.TagProduct}
                  //   keyExtractor={index => index.id}
                  //   renderItem={({ value, index }) => {
                  //     console.log('item?.SortedData',value)
                  //     return (
                  //       <TaggedProductsRenderWrap activeOpacity={0.7}>
                  //         <TaggedProductsImg
                  //           source={value?.img}
                  //           resizeMode="contain"
                  //         />
                  //         <Spacer width={10} />
                  //         <Column alignItems={'flex-start'}>
                  //           <Spacer height={5} />
                  //           <ProductTitle
                  //             title={value?.title == undefined ? item?.brandType : value?.title}
                  //             ellipsizeMode={'tail'}
                  //             numberOfLines={1}
                  //           />
                  //           <ProductBrand
                  //             brand={item?.brandType}
                  //             ellipsizeMode={'tail'}
                  //             numberOfLines={1}
                  //           />
                  //           <ProductLink
                  //             link={item?.link}
                  //             ellipsizeMode={'tail'}
                  //             numberOfLines={1}
                  //           />
                  //           <ProductDescription
                  //             description={item?.description}
                  //             ellipsizeMode={'tail'}
                  //             numberOfLines={1}
                  //           />
                  //         </Column>
                  //         <Spacer width={10} />
                  //       </TaggedProductsRenderWrap>
                  //     );
                  //   }}
                  // />
                  null}
                </TaggedProductsWrapper>

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
const TaggedProductsWrapper = styled.View`
  padding-vertical: 10px;
  justify-content: center;
`;
const TaggedProductsRenderWrap = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 20px;
`;

const TaggedProductsImg = styled.Image`
  width: 74px;
  height: 74px;
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
const PostDescription = styled.Text`
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
