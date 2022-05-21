//react
import React, { useState, useEffect } from 'react';
//flatlist
import { Dimensions } from 'react-native';

//styled
import styled from 'styled-components';

import { getLinkPreview } from 'link-preview-js';
import { useNavigation, useIsFocused } from '@react-navigation/native';

//community components
import Label from '../components/Label';
import Input from '../components/ProductLinkInputs';
//common components
import Header from '../../../components/common/Header/Header';
import Button from '../../../components/common/Buttons/Button';
import Smalltext from '../../../components/common/Text/SmallText';
//containers
import Viewcontainer from '../../../containers/ViewContainer';
import ScrollableView from '../../../containers/ScrollableView';
import Spacer from '../../../containers/Spacer';
import Column from '../../../containers/Column';
import Row from '../../../containers/Row';

import { linkedProductData } from '../../../components/svg_data/skin_data';


const width = Dimensions.get('window').width;

const CreateProductLink = (props) => {
  const [addingLink, setAddingLink] = useState('');
  const [linkData, SetlinkData] = useState('')
  const [data, setData] = useState({
    title: linkData.title,
    description: linkData.description,
    image: linkData.images,
    link: linkData.link,
    isselect: true,
  });
  // https://www.instagram.com/reel/CcKjhyTj0mq/?igshid=NDA1YzNhOGU=


  const { setLinkProduct, LinkProduct, setRefresh, Refresh, edit, Editdata, UpdateId } = props?.route?.params;
  const navigation = useNavigation();
  const focus = useIsFocused()


  const linkFetch = async () => {
    try {
      const response = await getLinkPreview(`${addingLink}`);
      setAddingLink(linkData);
      setData({
        title: response.title,
        description: response.description,
        img: response.images[0],
        isselect: false,
        uri: true,
        link: addingLink

      })
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (edit === true) {
      setAddingLink(Editdata?.link)
      linkFetch();
    }
  }, [focus])

  useEffect(() => {
    linkFetch();
  }, [addingLink]);


  const AddItme = () => {
    LinkProduct.push(data)
    navigation.goBack()
    setRefresh(!Refresh)

  }



  const UpdateItem = () => {

    const updatedOSArray = LinkProduct.map((ArrayValues, ArrayIndex) =>
      ArrayIndex === UpdateId ? { ...data }
        : ArrayValues
    );
    setLinkProduct(updatedOSArray);
    navigation.goBack()
    setRefresh(!Refresh)

  }

  return (
    <Viewcontainer>
      <Header
        center_title={'has_screen_title'}
        screen_title={'Product Link'}
        back_with_rec_icon={'back_with_tail_icon'}
      />

      <ScrollableView paddingHorizontal={24}>
        <Label label={'Product Link'} marginTop={31} paddingLeft={45} />

        <Input
          onChangeText={text => setAddingLink(text)}
          placeholder={'Add Product Link here'}
          has_left_icon={'has_left_icon'}
          paddingLeft={45}
          numberOfLines={1}
          multiline={false}
          defaultValue={data.link}


        />
        <Label label={'Title'} marginTop={31} />
        <Input
          placeholder={'Input product title here'}
          numberOfLines={1}
          multiline={false}
          defaultValue={data.title}
        />
        <Label label={'Description'} marginTop={31} />
        <Input
          minHight={140}
          paddingTop={22}
          paddingBottom={22}
          placeholder={'Input product desctiption'}
          defaultValue={
            data.description !== '' ? data.description : ''
          }
          multiline={true}
        />
        <Label label={'Preview'} marginTop={32} />
        {/* <LinkPreview
          text={data}
          enableAnimation={true}
          metadataTextContainerStyle={{
            backgroundColor: 'red',
            flexDirection: 'row',
          }}
        /> */}
        {/* <Image
          source={{uri: `${data.images}`}}
          style={{width: 60, height: 60}}
        /> */}

        <LinkedProductWrap>
          <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
            <SearchedItemImg source={data.images} />

            <Column alignItems={'flex-start'}>
              <SearchItemTitle>{data.title}</SearchItemTitle>
              <LinkedItemLink numberOfLines={1} ellipsizeMode={'tail'}>
                {data.url}
              </LinkedItemLink>
              <Spacer height={8.35} />
              <Smalltext
                title="Description"
                fontSize={11}
                textAlign={'left'}
                fontWeight={600}
              />
              <SearchedItemDesc ellipsizeMode={'tail'} numberOfLines={2}>
                {data.description}
              </SearchedItemDesc>
            </Column>
          </Row>
          <Spacer height={12} />

          <Spacer height={12} />
        </LinkedProductWrap>

        {/* WILL BE REMOVED */}
        <Spacer height={32} />
        {/* WILL BE REMOVED */}
      </ScrollableView>

      <BtnWrap>
        {edit === true ?
          <Button title={'Update'} onPress={() => { UpdateItem() }} />
          :
          <Button title={'Add'} onPress={() => { AddItme() }} />

        }
      </BtnWrap>
    </Viewcontainer>
  );
};

export default CreateProductLink;

const BtnWrap = styled.View`
  background-color: #fff;
  box-shadow: 0px -5px 19px rgba(5, 7, 22, 0.06);
  padding-vertical: 22.25px;
`;
const LinkedProductWrap = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-height: ${width / 1.9}px;
  padding-vertical: 16.7px;
  padding-left: 12px;
  border-radius: 4px;
  margin-bottom: 14.37px;
`;

const LinkedItemLink = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
  margin-top: 8px;
`;
const SearchedItemImg = styled.Image`
  width: ${width / 5.21}px;
  height: ${width / 5.2}px;
  justify-content: center;
  align-items: center;
  margin-right: 13.5px;
`;
const SearchItemTitle = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
`;

const SearchedItemDesc = styled.Text`
  max-width: 176.75px;
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
  margin-top: 4px;
`;
