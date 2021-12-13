/*
 * account.js was created to host the account information for the users of CalTrip. This screen also allows the user to delete and edit their information.
 * Navigation [FROM] home.js [TO] home.js, login.js, helpPage.js
 * Account.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/ 


import React from 'react';
import { Image, View, Button, Text, Alert } from 'react-native';
import { accountStyles } from '../styles/account_style';


/*
 * The function Account() creates all the displayed information on the Account page.
*/ 
export default function Account({ route, navigation }) {

  return (
    <View style={accountStyles.account}>

      <View style={accountStyles.accountInfoContainer}>

        {/* Create a profile picture */}
        <View style={{alignItems:"center", paddingTop: 50,}}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 500, marginBottom:20,}}
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/558/669/73/puppy-yorkshire-terrier-puppy-yorkie-puppy-pet.jpg',
          }}
        />
        </View>

         {/* Display the personal information */}
        <View style={accountStyles.accountInfo}>
          <Text style={accountStyles.accountInfo}>John Smith</Text>
          <Text style={accountStyles.accountInfo}>js@students.calvin.edu</Text>
          <Text style={accountStyles.accountInfo}>123-456-7891</Text>
        </View>
      </View>

      {/* Create a Delete Account button */}
      <View style={accountStyles.accountButtonContainer}>
          <Button
            color='#75022c'
            title="Delete Account"
          />
      </View>

    </View>
  );
}
