import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import Lips from '../../assets/svg/categories/lips .svg'
import Eyes from '../../assets/svg/categories/eye.svg'
import Skin from '../../assets/svg/categories/skin.svg'
import Face from '../../assets/svg/categories/face.svg';



import Styles from './styledcomp'


const Categories = [
  { icon: Lips, name: 'Lips' },
  { icon: Eyes, name: 'Eyes' },
  { icon: Skin, name: 'Skin' },
  { icon: Face, name: 'Face' },
]


export default function Index() {
  return (


    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={Styles.container}>

      {Categories.map((value, index) => {

        let Icon = value?.icon
        return (
          <View style={Styles.MainRow} key={index}>
            <View style={Styles.Item}>
              <Icon />
            </View>
            <View>
              <Text style={Styles.text}>{value?.name}</Text>
            </View>
          </View>
        )
      })}


    </ScrollView>
  )
}
