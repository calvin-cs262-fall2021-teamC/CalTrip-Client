import React from 'react';
import { Image, View, Button, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Account({ route, navigation }) {

  return (
    <View style={globalStyles.account}>

        <View style={{alignItems:"center", paddingTop: 50,}}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 500, marginBottom:20,}}
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/558/669/73/puppy-yorkshire-terrier-puppy-yorkie-puppy-pet.jpg',
          }}
        />
        </View>
        <View style={globalStyles.accountInfo}>
          <Text style={globalStyles.accountInfo}>John Smith</Text>
          <Text style={globalStyles.accountInfo}>js@students.calvin.edu</Text>
          <Text style={globalStyles.accountInfo}>123-456-7891</Text>
        </View>

        <View style={globalStyles.deleteAccountButton}>
          <Button
            color='#FF1800'
            title="Delete Account"/>
        </View>
    </View>
  );
}
