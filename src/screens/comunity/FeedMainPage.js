import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import styles from './style'
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import ScrollableView from '../../containers/ScrollableView';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Divider from '../../components/Divider/Divider';
import Feed from './Feed';
import BottomSheet from '../../components/BottomSheet/BottomSheet';

import User from '../../assets/svg/profile/user.svg';


const Feedmainpage = () => {

  const [select, setselect] = useState(0)
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      "name": "Beauty Bar",
      "time": "2 min ago",
      "descr": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "like": 12,
      "comment": 5

    },
    {
      "name": "Love Bar",
      "time": "2 min ago",
      "descr": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "like": 7,
      "comment": 8

    },
    {
      "name": "Soap Bar",
      "time": "20 min ago",
      "descr": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "like": 13,
      "comment": 89

    },
    {
      "name": "Lux Bar",
      "time": "2 min ago",
      "descr": "Amet minim mollit non deserunt",
      "like": 500,
      "comment": 300

    }
  ]

  const FilterOptions = [
    {
      Filter:'Newest',
    },
    {
      Filter:'Most Comment',
    },
    {
      Filter:'Most Liked',
    },
    {
      Filter:'#Acne',
    },
    {
      Filter:'Discussion with Products',
    },
    {
      Filter:'Bad Reviews',
    },
    
  ]

  const ReportOptions = [
    {
      Report:'Report Post'
    },
    {
      Report:'Share'
    }
  ]

  const ShowFilter = ()=>{
    setShowModal(true)
    setselect(3)
  }



  return (
    <SafeAreaContainer>
      <ScrollableView>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.maontext}>Community</Text>
          </View>


          <View style={styles.menue}>

            <TouchableOpacity onPress={() => setselect(0)} style={select == 0 ? styles.selected : null}>
              <Text style={select == 0 ? styles.menutext : styles.unselecttext}>Post</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setselect(1)} style={select == 1 ? styles.selected : null}>
              <Text style={select == 1 ? styles.menutext : styles.unselecttext}>Discussion</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setselect(2)} style={select == 2 ? styles.selected : null}>
              <Text style={select == 2 ? styles.menutext : styles.unselecttext}>Trendng</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => ShowFilter() } style={select == 3 ? styles.selected : null}>
              <Text style={select == 3 ? styles.menutext : styles.unselecttext}>Filter</Text>
            </TouchableOpacity>

          </View>



          <View style={styles.rowpad}>
            <User />
            <View style={styles.textbox}>
              <Text style={styles.textboxtext}>Write your post here</Text>
            </View>
          </View>



          <Divider backgroundColor={'#F3F8FB'} />

          <Feed data={data} />
          
          <BottomSheet data={FilterOptions} showModal={showModal} setShowModal={setShowModal}/>
         




        </View>
      </ScrollableView>
    </SafeAreaContainer>
  );
};



export default Feedmainpage;
