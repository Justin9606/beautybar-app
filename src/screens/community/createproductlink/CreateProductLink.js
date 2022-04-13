//react
import React from 'react';

//flatlist
import {Dimensions} from 'react-native';

//react-native-bouncy-checkbox
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//styled
import styled from 'styled-components';

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
  return (
    <Viewcontainer>
      <Header
        center_title={'has_screen_title'}
        screen_title={'Product Link'}
        back_with_rec_icon={'back_with_tail_icon'}
      />

      <ScrollableView></ScrollableView>

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
