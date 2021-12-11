import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { globalStyles } from '../styles/global';


export default function HelpShared({ navigation }) {
    return (
        <View style={{flexDirection: 'row'}}>

            <TouchableOpacity onPress={() => navigation.navigate('Help Screen')}>
                 <Text style={{fontSize: 25, paddingRight: 20}}>?</Text>
            </TouchableOpacity>
        </View>
    );
}
