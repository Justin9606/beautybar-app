//react
import React, {useState} from 'react';
//flatlist
import {Dimensions} from 'react-native';
//@flyerhq/react-native-link-preview
import {LinkPreview} from '@flyerhq/react-native-link-preview';
//styled
import styled from 'styled-components';

// import {getLinkPreview, getPreviewFromContent} from 'link-preview-js';

//community components
import Label from '../components/Label';
import Input from '../components/ProductLinkInputs';
//common components
import Header from '../../../components/common/Header/Header';
import Button from '../../../components/common/Buttons/Button';
//containers
import Viewcontainer from '../../../containers/ViewContainer';
import ScrollableView from '../../../containers/ScrollableView';
import Spacer from '../../../containers/Spacer';
import Column from '../../../containers/Column';
import Row from '../../../containers/Row';

const CreateProductLink = () => {
  const [addingLink, setAddingLink] = useState('');
  // // https://www.instagram.com/reel/CcKjhyTj0mq/?igshid=NDA1YzNhOGU=

  // getLinkPreview(`${addingLink}`).then(data => {
  //   console.log(data);
  // });

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
        />
        <Label label={'Title'} marginTop={31} />
        <Input
          placeholder={'Input product title here'}
          numberOfLines={1}
          multiline={false}
        />
        <Label label={'Description'} marginTop={31} />
        <Input
          minHight={140}
          paddingTop={22}
          paddingBottom={22}
          placeholder={'Input product desctiption'}
          multiline={true}
        />
        <Label label={'Preview'} marginTop={32} />
        {/* <LinkPreview
          text={addingLink}
          enableAnimation={true}
          metadataTextContainerStyle={{
            backgroundColor: 'red',
            flexDirection: 'row',
          }}
        /> */}

        {/* WILL BE REMOVED */}
        <Spacer height={32} />
        {/* WILL BE REMOVED */}
      </ScrollableView>

      <BtnWrap>
        <Button title={'Add'} />
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
