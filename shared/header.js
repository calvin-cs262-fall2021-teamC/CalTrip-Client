import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

/*
 * The function Header() creates a header that redirects to My Account page.
*/
export default function Header({ navigation }) {
    return (
        <View>
            {/* Create a logo for my account */}
            <TouchableOpacity onPress={() => navigation.navigate('My Account')}>
                <Image
                  style={{ width: 30, height: 30, borderRadius: 30}}
                  source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-udL_-Me4EZSeIPL_RFegnzJ6a9WKGLP2YQ&usqp=CAU',
                        }}
                />
            </TouchableOpacity>
        </View>
    );
}
