//react
import React, { useState } from 'react';
//react native
import { Dimensions, View, FlatList, ActivityIndicator } from 'react-native';
//useNavigation
import { Link, useNavigation } from '@react-navigation/native';

//image picker
import ImagePicker from 'react-native-image-crop-picker';

//styled components
import styled from 'styled-components/native';
//Redux Store Data

import { useSelector } from 'react-redux';

//tag svg
import TagProductSvg from '../../../assets/svg/community/tag_product.svg';
import RightArrowSvg from '../../../assets/svg/community/right_arrow.svg';

//temp png
import UserProfilePic from '../../../assets/icons/temp/user_profile_pic.png';
import UploadImg from '../../../assets/svg/community/upload_img.svg';

//containers
import ScrollableView from '../../../containers/ScrollableView';
import Spacer from '../../../containers/Spacer';
import Row from '../../../containers/Row';

//common components
import Header from '../../../components/common/Header/Header';
import Button from '../../../components/common/Buttons/Button';
//common text components
import SmallText from '../../../components/common/Text/SmallText';

//components
import CreateDiscussionInput from '../components/CreateDiscussionInput';
import Label from '../components/Label';
import { postData } from '../../../components/svg_data/skin_data';
//add and remove image svg
import AddImageSVG from '../../../assets/svg/etc/add_image.svg';
import RemoveImageSVG from '../../../assets/svg/etc/image_remove.svg';
import {
  POPULAR_PRODUCT_DEMO_DATA,
  linkedProductData,
} from '../../../components/svg_data/skin_data';

const Creatediscussion = props => {
  const navigation = useNavigation();
  const User = useSelector(state => {
    return state?.persistedReducer?.AuthReducer?.UserDetail;
  });

  const [images, setImages] = useState([]);
  const [tagitem, settagitem] = useState([]);
  const [tagextaitem, settagextaitem] = useState([]);
  const [discussion, setdiscussion] = useState();
  const [refresh, setrefresh] = useState(false);
  const [loading, setloading] = useState(false);

  const setUpdate = props?.route?.params;

  const imagePicker = () => {
    setloading(true);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
    })
      .then(image => {
        setImages([...images, ...image]);
        setloading(false);
      })
      .catch(() => {
        setloading(false);
      });
  };

  console.log('images', images);

  const removeItem = item => {
    const indexOfObject = images.findIndex(object => {
      return object.path === item.path;
    });
    images.splice(indexOfObject, 1);
    setImages(images);
    setrefresh(!refresh);
  };

  const Tag1 = tagitem.filter(tagitem => tagitem.isselect === true);
  const Tag2 = tagextaitem.filter(tagextaitem => tagextaitem.isselect === true);
  const TagProduct = [...Tag1, ...Tag2];

  const TagProductSaveCopy = [...POPULAR_PRODUCT_DEMO_DATA]
  const LinkProductSaveCopy = [...linkedProductData]


  const AddDiscussion = () => {

    let ImagesArray = [];
    images.map((v, index) => {
      ImagesArray.push({ url: v.path });
    });
    let data = {
      user_pic: require('../../../assets/icons/temp/user_profile_pic.png'),
      name: User?.name,
      time: new Date().toLocaleTimeString(),
      descr: discussion,
      postImg: ImagesArray,
      like: 20,
      comment: 20,
      createrdatetime: new Date(),
      TagProduct: TagProduct,
    };

    postData.push(data);
    setrefresh(!refresh);
    setUpdate.setUpdate(data);
    navigation.goBack();

    //Reset Tag Product
    POPULAR_PRODUCT_DEMO_DATA.length = 0
    linkedProductData.length = 0;

    let TagProductNewArray = TagProductSaveCopy.map(value => value.isselect == true ? Object.assign({}, value, { isselect: false }) : value);
    let LinkProductNewArray = LinkProductSaveCopy.map(element => element.isselect == true ? Object.assign({}, element, { isselect: false }) : element);

    POPULAR_PRODUCT_DEMO_DATA.push(...TagProductNewArray);
    linkedProductData.push(...LinkProductNewArray)
  };



  return (
    <>
      <>
        <Header
          center_title={'has_screen_title'}
          screen_title={'Discussion'}
          back_with_rec_icon={'back_with_tail_icon'}
        />
        <ScrollableView paddingHorizontal={24}>
          <Spacer height={16} />
          <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
            <UserProfile source={UserProfilePic} />

            <Spacer width={15.76} />
            <CreateDiscussionInput
              placeholder={'What is on your mind?'}
              multiline={true}
              onChangeText={e => {
                setdiscussion(e);
              }}
            />
          </Row>
          <Spacer height={24} />
          <TagProductWrap
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('TagProducts', {
                setTagProduct1: settagitem,
                setTagProduct2: settagextaitem,
              })
            }>
            <Row justifyContent={'flex-start'}>
              <TagProductSvg />
              <TagProductText>Tag Product</TagProductText>
              <CountTaggedProduct>
                {TagProduct.length} Product
              </CountTaggedProduct>
              <RightArrowSvg style={{ position: 'absolute', right: 10 }} />
            </Row>
          </TagProductWrap>
          <Label label={'Insert Image'} marginBottom={13.37} />
          {images.length === 0 ? (
            <>
              {loading === false ? (
                <UploadImgBigWrap activeOpacity={0.7} onPress={imagePicker}>
                  <UploadImg />
                  <Spacer height={9.18} />
                  <SmallText
                    title={'Insert Image max 2mb'}
                    textAlign={'center'}
                    fontSize={12}
                  />
                </UploadImgBigWrap>
              ) : (
                <View>
                  <ActivityIndicator size="large" color="#e74779" />
                </View>
              )}
            </>
          ) : (
            <ImagesWrap>
              <AddImageBtn onPress={imagePicker} activeOpacity={0.7}>
                <AddImageSVG />
                <AddImageText>Add Image</AddImageText>
              </AddImageBtn>
              <FlatList
                showsHorizontalScrollIndicator={false}
                extraData={refresh}
                horizontal
                data={images}
                renderItem={({ item, index }) => {
                  return (
                    <Container key={index}>
                      <Images source={{ uri: item.path }} />
                      <RemoveImageBtn
                        onPress={() => removeItem(item)}
                        activeOpacity={0.7}>
                        <RemoveImageSVG />
                      </RemoveImageBtn>
                    </Container>
                  );
                }}
              />
            </ImagesWrap>
          )}
        </ScrollableView>
      </>
      <BtnWrap>
        <Button title={'Create Discussion'} onPress={() => AddDiscussion()} />
      </BtnWrap>
    </>
  );
};

export default Creatediscussion;

const BtnWrap = styled.View`
  background-color: #fff;
  box-shadow: 0px -5px 19px rgba(5, 7, 22, 0.06);
  padding-vertical: 22.25px;
`;

const UserProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const TagProductWrap = styled.TouchableOpacity`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
  height: 52px;
  justify-content: center;
  padding: 16px;
`;
const TagProductText = styled.Text`
  margin-left: 12px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #323234;
`;
const CountTaggedProduct = styled.Text`
  position: absolute;
  right: 30px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #323234;
`;

const UploadImgBigWrap = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 1.14}px;
  height: 232.86px;
  background: rgba(231, 71, 121, 0.04);
  border: 1px dashed #e74779;
  box-sizing: border-box;
  border-radius: 4px;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const ImagesWrap = styled.View`
  flex-direction: row;
`;

const AddImageBtn = styled.TouchableOpacity`
  width: 103px;
  height: 103px;
  border-width: 1px;
  border-color: #0000001a;
  justify-content: center;
  align-items: center;
`;
const AddImageText = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: #323234;
`;

const Container = styled.View`
  margin-left: 8px;
`;
const Images = styled.Image`
  width: 103px;
  height: 103px;
`;

const RemoveImageBtn = styled.TouchableOpacity`
  position: absolute;
  top: 4px;
  right: 4px;
`;
