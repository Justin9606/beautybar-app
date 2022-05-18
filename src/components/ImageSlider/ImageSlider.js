import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList, Modal, Dimensions, Text, TouchableOpacity, Pressable } from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

const ImageSlider = ({ images }) => {

    const { width } = Dimensions.get('window');
    const height = width * 0.7;

    const [active, setActive] = useState(0);
    const [modal, setmodal] = useState(false);
    const [ModalImages, SetModalImages] = useState([])



    const onScrollChange = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity onPress={() => {
                setmodal(true)
                SetModalImages([images[index]])
            }}>
                <Image
                    source={item}
                    style={{ width, height, resizeMode: 'cover' }}
                />
            </TouchableOpacity>
        );
    };

    const imagess = [{
        // Simplest usage.
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

    
    }]



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
                keyExtractor={(item, index) => index}
            />

            <Modal visible={modal} transparent={true} onCancel={() => setmodal(false)} >
                <ImageViewer imageUrls={imagess} onSwipeDown={() => setmodal(false)} enableSwipeDown={true} />
            </Modal>

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