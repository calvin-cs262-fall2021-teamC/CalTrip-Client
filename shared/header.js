import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { globalStyles } from '../styles/global';


export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('My Account')}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 40, marginBottom:20}}
                  source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-udL_-Me4EZSeIPL_RFegnzJ6a9WKGLP2YQ&usqp=CAU',
                        }}
                />
            </TouchableOpacity>
        </View>
    );
}