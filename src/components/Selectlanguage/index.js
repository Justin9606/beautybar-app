import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

export const App = () => {
    const modalizeRef = useRef < Modalize > (null);



    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableOpacity onPress={onOpen}>
                <Text>Select Language</Text>
            </TouchableOpacity>

            <Modalize ref={modalizeRef} modalHeight={250}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                snapPoint={300}
                HeaderComponent={
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Select Language</Text>
                    </View>
                }
                withHandle={true}>


            </Modalize>
        </>
    );
};