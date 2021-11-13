import React from 'react';
import { Image, View, Button, Text } from 'react-native';
import { accountStyles } from '../styles/account_style';

export default function Account({ route, navigation }) {

  return (
    <View style={accountStyles.account}>

        <View style={{alignItems:"center", paddingTop: 50,}}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 500, marginBottom:20,}}
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/558/669/73/puppy-yorkshire-terrier-puppy-yorkie-puppy-pet.jpg',
          }}
        />
        </View>
        <View style={accountStyles.accountInfo}>
          <Text style={accountStyles.accountInfo}>John Smith</Text>
          <Text style={accountStyles.accountInfo}>js@students.calvin.edu</Text>
          <Text style={accountStyles.accountInfo}>123-456-7891</Text>
        </View>

        <View style={accountStyles.deleteAccountButton}>
          <Button
            color='#FF1800'
            title="Delete Account"/>
        </View>
    </View>
  );
}
