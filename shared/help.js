import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

/*
 * The function HelpShared() creates a header for the help page.
*/
export default function HelpShared({ navigation }) {
    return (
        /* Creates a clickable word "Help" that redirects to the help page */
        <View style={{flexDirection: 'row'}}>

            <TouchableOpacity onPress={() => navigation.navigate('Help Screen')}>
                 <Text style={{fontSize: 20, paddingRight: 10}}>Help</Text>
            </TouchableOpacity>
            
        </View>
    );
}
