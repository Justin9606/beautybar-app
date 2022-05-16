import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList, ScrollView, Dimensions, Text } from 'react-native';

const ImageSlider = ({ images }) => {

    const { width } = Dimensions.get('window');
    const height = width * 0.7;

    const [active, setActive] = useState(0);

    const onScrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    const renderItem = ({ item }) => {

        return (
            <Image
                source={item}
                style={{ width, height, resizeMode: 'cover' }}
            />
        );
    };



    return (
        <View>

            <FlatList
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}
                data={images}
                renderItem={renderItem}
                keyExtractor={(item,index) => index}
            />

            {/* <ScrollView
                pagingEnabled
                horizontal
                onScroll={onScrollChange}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}>

                {images.map((v, i) => {
                    console.log('v', v)

                    return (
                        <Image
                            key={i}
                            source={v}
                            style={{ width, height, resizeMode: 'cover' }}
                        />
                    )
                })}
            </ScrollView> */}

            <View style={styles.pagination}>
                {images.map((i, k) => (
                    <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
                        •
                    </Text>
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        alignSelf: 'center',
    },
    dot: {
        color: '#888',
        fontSize: 50,
    },
    activeDot: {
        color: '#FFF',
        fontSize: 50,
    },
});

export default ImageSlider;