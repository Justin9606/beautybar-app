//react
import React, { useState } from 'react';
//react native
import { Dimensions, Image, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
//useNavigation
import { useNavigation } from '@react-navigation/native';

//image picker
import ImagePicker from 'react-native-image-crop-picker';


//styled components
import styled from 'styled-components';

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
import Smalltext from '../../../components/common/Text/SmallText';

//components
import CreateDiscussionInput from '../components/CreateDiscussionInput';
import Label from '../components/Label';

const Creatediscussion = () => {


  const navigation = useNavigation();

  const [Images, setImages] = useState([]);
  const [discussion,setdiscussion] = useState()
  const [refresh, setrefresh] = useState(false);
  const [loading, setloading] = useState(false);

  const imagepicker = () => {
    setloading(true)
    ImagePicker.openPicker({
      width: 300,
      height: 400, multiple: true
    }).then(image => {
      setImages(image);
      setloading(false)
    }).catch(() => {
      setloading(false)
    })
  }

  const removeitem = (item) => {
    const indexOfObject = Images.findIndex(object => {
      return object.path === item.path;
    });
    Images.splice(indexOfObject, 1);
    setImages(Images);
    setrefresh(!refresh)
  }


  console.log('discussion',discussion)



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
              onChangeText={(e)=>{setdiscussion(e)}}
            />
          </Row>
          <Spacer height={24} />
          <TagProductWrap
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TagProducts')}>
            <Row justifyContent={'flex-start'}>
              <TagProductSvg />
              <TagProductText>Tag Product</TagProductText>
              <CountTaggedProduct> 1 Product </CountTaggedProduct>
              <RightArrowSvg style={{ position: 'absolute', right: 10 }} />
            </Row>
          </TagProductWrap>
          <Label label={'Insert Image'} />


          {Images.length === 0 ?
            <>
              {loading === false ?
                <UploadImgBigWrap activeOpacity={0.7} onPress={() => imagepicker()}>
                  <UploadImg />
                  <Spacer height={9.18} />
                  <Smalltext
                    title={'Insert Image max 2mb'}
                    textAlign={'center'}
                    fontSize={12}
                  />
                </UploadImgBigWrap>
                :
                <View>
                  <ActivityIndicator size="large" color="#e74779" />
                </View>
              }
            </>
            : Images.length === 1 ?
              <View>
                <Image source={{ uri: Images[0].path }} style={{ height: 250, width: '100%', alignSelf: 'center', borderRadius: 10 }} />
                <TouchableOpacity onPress={() => setImages([])} style={{
                  position: 'absolute',
                  right: -5,
                  top: -10,
                  backgroundColor: 'black',
                  height: 30, width: 30, borderRadius: 20
                }} />
              </View>
              : <FlatList
                extraData={refresh}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                  padding: 10,
                  marginBottom: 20,
                }}
                data={Images}
                renderItem={({ item, index }) => {
                  return (
                    <View key={index}>
                      <Image source={{ uri: item.path }} style={{ height: 150, width: 150, alignSelf: 'center', borderRadius: 10 }} />
                      <TouchableOpacity onPress={() => removeitem(item)} style={{
                        position: 'absolute',
                        right: -5,
                        top: -10,
                        backgroundColor: 'black',
                        height: 30, width: 30, borderRadius: 20
                      }} />
                    </View>
                  );
                }}
              />
          }
        </ScrollableView>
      </>
      <BtnWrap>
        <Button title={'Create Discussion'} />
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
