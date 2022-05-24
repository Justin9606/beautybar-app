//react
import React, {useState} from 'react';

//flatlist
import {Dimensions} from 'react-native';

//@react-navigation/native
import {useNavigation} from '@react-navigation/native';

//react-native-bouncy-checkbox
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//styled
import styled from 'styled-components';

//containers
import Viewcontainer from '../../../containers/ViewContainer';
import ScrollableView from '../../../containers/ScrollableView';
import Spacer from '../../../containers/Spacer';
import Column from '../../../containers/Column';
import Row from '../../../containers/Row';

//common components
import Header from '../../../components/common/Header/Header';
import Button from '../../../components/common/Buttons/Button';

//common Texts
import Smalltext from '../../../components/common/Text/SmallText';

//community components
import Divider from '../components/Divider';

//SVGs
import Search from '../../../assets/svg/header/small_search.svg';
import TagProductLink from '../../../assets/svg/community/link.svg';
import QuesionMark from '../../../assets/svg/community/question_mark.svg';
import Plus from '../../../assets/svg/community/plus.svg';
import Edit from '../../../assets/svg/community/edit.svg';
import Delete from '../../../assets/svg/community/delete.svg';

//temp

//demo data
import {
  POPULAR_PRODUCT_DEMO_DATA,
  linkedProductData,
} from '../../../components/svg_data/skin_data';

const width = Dimensions.get('window').width;

const TagProducts = props => {
  const {setTagProduct1, setTagProduct2} = props?.route?.params;

  const [Refresh, setRefresh] = useState(false);
  const navigation = useNavigation();
  const [LinkProduct, setLinkProduct] = useState(linkedProductData);
  const [searchTerm, setSearchTerm] = useState('');

  let FilterLinkProducts = POPULAR_PRODUCT_DEMO_DATA.filter(val => {
    if (searchTerm == '') {
      return val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });

  const onTagItem = index => {
    const newData = [...FilterLinkProducts];
    newData[index].isselect = !newData[index].isselect;
    setRefresh(!Refresh);
    setTagProduct1(newData);
  };

  const onTagItem2 = index => {
    const newData = [...LinkProduct];
    newData[index].isselect = !newData[index].isselect;
    setRefresh(!Refresh);
    setTagProduct2(newData);
  };

  const removeitem = (item, index) => {
    const indexOfObject = LinkProduct.findIndex((object, i) => {
      return i === index;
    });
    LinkProduct.splice(indexOfObject, 1);
    setRefresh(!Refresh);
    let exm = LinkProduct.filter(tagextaitem => tagextaitem.isselect === true);
    setTagProduct2(exm);
  };

  return (
    <Viewcontainer>
      <Header
        center_title={'has_screen_title'}
        screen_title={'Tag Products'}
        back_with_rec_icon={'back_with_tail_icon'}
      />
      <SearchWrap>
        <SearchSvgWrap>
          <Search />
        </SearchSvgWrap>
        <SearchInput
          // autoFocus={true}
          returnKeyType={'search'}
          placeholderTextColor={'#b1b1b1'}
          onChangeText={e => setSearchTerm(e)}
          placeholder={'Search Product or brand here'}
        />
      </SearchWrap>

      <ScrollableView
        paddingHorizontal={24}
        showsVerticalScrollIndicator={false}>
        <SearchedDataWrap>
          {FilterLinkProducts?.map((item, index) => {
            return (
              <RenderItemWrap
                key={index}
                activeOpacity={0.7}
                onPress={() => onTagItem(index)}>
                <SearchedItemImg source={item?.icon} />
                <Column alignItems={'flex-start'}>
                  <SearchItemTitle>{item?.name}</SearchItemTitle>
                  <SearchedItemDesc>{item?.description}</SearchedItemDesc>
                  <SearchedItemBrand>{item?.brandType}</SearchedItemBrand>
                </Column>
                <BouncyCheckBoxWrap>
                  <BouncyCheckbox
                    iconStyle={{borderRadius: 5}}
                    disableBuiltInState
                    isChecked={item?.isselect}
                    onPress={() => onTagItem(index)}
                    fillColor={'#E74779'}
                    textStyle={{
                      textDecorationLine: 'none',
                    }}
                  />
                </BouncyCheckBoxWrap>
              </RenderItemWrap>
            );
          })}
        </SearchedDataWrap>

        <ProductLinkWrap
          onPress={() =>
            navigation.navigate('ProductLink', {
              setLinkProduct,
              LinkProduct,
              setRefresh,
              Refresh,
              edit: false,
            })
          }>
          <Row justifyContent={'flex-start'} alignItems={'center'}>
            <TagProductLink />
            <Spacer width={8} />
            <Smalltext
              title={'Product Link (Optional)'}
              textAlign={'center'}
              fontSize={16}
            />

            <QuesionMarkWrap>
              <QuesionMark width={20} height={20} top={2} />
            </QuesionMarkWrap>
            <PlusWrap>
              <Plus />
            </PlusWrap>
          </Row>
        </ProductLinkWrap>
        {LinkProduct.length > 0 ? (
          <>
            <Spacer height={14.37} />
            {LinkProduct.map((item, index) => {
              return (
                <LinkedProductWrap key={index}>
                  <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
                    {item.uri === true ? (
                      <SearchedItemImg source={{uri: item.img}} />
                    ) : (
                      <SearchedItemImg source={{uri: item.img}} />
                    )}

                    <Column
                      alignItems={'flex-start'}
                      onPress={() => onTagItem(index)}>
                      <SearchItemTitle>{item.title}</SearchItemTitle>
                      <LinkedItemLink>{item.link}</LinkedItemLink>
                      <Spacer height={8.35} />
                      <Smalltext
                        title="Description"
                        fontSize={11}
                        textAlign={'left'}
                        fontWeight={600}
                      />
                      <SearchedItemDesc
                        ellipsizeMode={'tail'}
                        numberOfLines={2}>
                        {item.description}
                      </SearchedItemDesc>
                    </Column>

                    <BouncyCheckBoxWrap>
                      <BouncyCheckbox
                        iconStyle={{borderRadius: 5}}
                        disableBuiltInState
                        isChecked={item?.isselect}
                        onPress={() => onTagItem2(index)}
                        fillColor={'#E74779'}
                        textStyle={{
                          textDecorationLine: 'none',
                        }}
                      />
                    </BouncyCheckBoxWrap>
                  </Row>
                  <Spacer height={12} />
                  <Divider />
                  <Spacer height={12} />

                  <Row justifyContent={'flex-start'} alignItems={'center'}>
                    <LinkedItemBottomIconsBtn
                      onPress={() =>
                        navigation.navigate('ProductLink', {
                          setLinkProduct,
                          LinkProduct,
                          setRefresh,
                          Refresh,
                          edit: true,
                          Editdata: item,
                          UpdateId: index,
                        })
                      }>
                      <Edit />
                    </LinkedItemBottomIconsBtn>
                    <Spacer width={10} />
                    <LinkedItemBottomIconsBtn
                      onPress={() => removeitem(item, index)}>
                      <Delete />
                    </LinkedItemBottomIconsBtn>
                  </Row>
                </LinkedProductWrap>
              );
            })}
          </>
        ) : null}
        {/* WILL BE REMOVED */}
        <Spacer height={32} />
        {/* WILL BE REMOVED */}
      </ScrollableView>

      <BtnWrap>
        <Button title={'Ok'} onPress={() => navigation.goBack()} />
      </BtnWrap>
    </Viewcontainer>
  );
};

export default TagProducts;

const SearchWrap = styled.View`
  margin-vertical: 10px;
  margin-horizontal: 24px;
  height: 52px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  justify-content: center;
  background: #fff;
`;

const SearchSvgWrap = styled.View`
  position: absolute;
  left: 16px;
`;
const SearchInput = styled.TextInput`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #323234;
  margin-left: 50px;
`;

const SearchedDataWrap = styled.View`
  margin-top: 34.72px;
  justify-content: center;
`;

const SearchedItemImg = styled.Image`
  width: ${width / 5.21}px;
  height: ${width / 5.2}px;
  justify-content: center;
  align-items: center;
  margin-right: 13.5px;
`;

const RenderItemWrap = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24.28px;
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

const SearchedItemBrand = styled.Text`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #323234;
  margin-top: 1px;
`;
const BouncyCheckBoxWrap = styled.View`
  box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.06);
  position: absolute;
  right: 0px;
`;

const BtnWrap = styled.View`
  background-color: #fff;
  box-shadow: 0px -5px 19px rgba(5, 7, 22, 0.06);
  padding-vertical: 22.25px;
`;

const ProductLinkWrap = styled.TouchableOpacity`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 4px;
  height: 52px;
  justify-content: center;
  padding-horizontal: 14px;
`;

const QuesionMarkWrap = styled.TouchableOpacity`
  padding: 5px;
`;

const PlusWrap = styled.View`
  position: absolute;
  right: 4px;
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

const LinkedItemBottomIconsBtn = styled.TouchableOpacity`
  padding: 5px 5px 0px 10px;
`;
