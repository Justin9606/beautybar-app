import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Modal,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

import ImageView from 'react-native-image-viewing';

const ImageSlider = ({images}) => {
  const {width} = Dimensions.get('window');
  const height = width * 0.7;
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const onScrollChange = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setIsVisible(true);
        }}>
        <Image source={item} style={{width, height, resizeMode: 'cover'}} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={{width, height}}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        scrollEnabled={images.length > 1 ? true : false}
      />

      <ImageView
        images={images.map(el => ({
          uri: el.url,
        }))}
        imageIndex={0}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="fade"
      />

      <View style={styles.pagination}>
        {images.length > 1
          ? images.map((item, index) => (
              <Text
                key={index}
                style={index == active ? styles.activeDot : styles.dot}>
                •
              </Text>
            ))
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#E3659C',
    fontSize: 50,
    opacity: 0.6,
  },
  activeDot: {
    color: '#E74779',
    fontSize: 50,
  },
});

export default ImageSlider;
