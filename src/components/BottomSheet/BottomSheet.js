import React, { useState, useCallback, useEffect } from 'react';
import {
    ScrollView,
    View,
    Text,
    Keyboard,
    ActivityIndicator,
    Alert,
    Modal,
    TouchableOpacity,

} from 'react-native';

export default function BottomSheet({ data, showModal, setShowModal }) {


    let show = showModal;
    let hide = setShowModal


    const hideModal = () => {
        hide ? hide(false) : null
    };


    return (
        <>
            <Modal transparent animationType="fade" visible={show}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity
                        onPress={() => hideModal()}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40,
                            backgroundColor: 'pink',
                            alignSelf: 'flex-end',
                            marginRight: 10,
                            marginBottom: -20,
                            zIndex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text>Close</Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: '#fff',
                            paddingBottom: 25,
                            paddingTop: 25,
                        }}>
                        <TouchableOpacity>
                            <Text
                                style={{

                                    color: 'red',
                                    marginLeft: 30,
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }}>
                                Report 
                            </Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: '#000',
                                paddingTop: 10,
                                marginBottom: 10,
                            }}
                        />
                        <TouchableOpacity >
                            <Text
                                style={{

                                    color: 'red',
                                    marginLeft: 30,
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }}>
                                Share
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}
