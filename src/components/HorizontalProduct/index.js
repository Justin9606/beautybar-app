import React from 'react';
import {Text, View, ScrollView} from 'react-native';

import Product1 from '../../assets/svg/products/product_1.svg';
import Product2 from '../../assets/svg/products/product_2.svg';

import Heart from '../../assets/svg/products/heart_notlike.svg';

import Styles from './styledcomp';

const Categories = [
  {
    icon: Product1,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product2,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product1,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product2,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product1,
    name: 'NIVEA',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
  {
    icon: Product2,
    name: 'RATED GREEN',
    description: 'Shooting Cleansing Oil',
    star: 4,
    price: 140.0,
  },
];

export default function Index() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Categories.map((value, index) => {
          let Icon = value?.icon;
          return (
            <View style={Styles.Item} key={index}>
              <Icon style={Styles.icon} />

              <View>
                <Text style={Styles.text}>{value?.name}</Text>
                <Text style={Styles.textdes}>{value?.description}</Text>
                <Text style={Styles.textdes}> Rating :{value?.star}.0</Text>
              </View>

              <View style={Styles.row}>
                <Text style={Styles.price}> ₩ {value?.price}</Text>
                <Heart />
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={{height: 100}} />
    </View>
  );
}
