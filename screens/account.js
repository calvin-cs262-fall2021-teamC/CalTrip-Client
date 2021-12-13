/*
 * account.js was created to host the account information for the users of CalTrip. This screen also allows the user to delete and edit their information.
 * Navigation [FROM] home.js [TO] home.js, login.js, helpPage.js
 * Account.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/


import React from 'react';
import { Image, View, Button, Text, Alert } from 'react-native';
import { accountStyles } from '../styles/account_style';
import AsyncStorage from '@react-native-async-storage/async-storage';


/*
 * The function Account() creates all the displayed information on the Account page.
*/
export default function Account({ route, navigation }) {


  const prac = () => {
    AsyncStorage.getItem('emailAddress')
    .then((data) => alert(data));
  }

  const delete_check = () => {
    Alert.alert(
      "Are you sure you would like to delete account?",
      "Don't go :(",
      [
        {
          text: "Yes",
          onPress: () => deleteAccount() },
        {
          text: "No",
          style:"cancel"
        }
      ]
      );
  };

  const deleteAccount = async () => {
    const emailAddress = await AsyncStorage.getItem('emailAddress')
    fetch("https://caltrip-service.herokuapp.com/users", {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailAddress: emailAddress
      })
    })
    .then((resp) => alert(JSON.stringify(resp)))
    .catch((err) => alert(err))
    alert("Account is successfully deleted.")
    navigation.reset({
      index:0
    })
    navigation.navigate("Login", {})
  }



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
          <Text style={accountStyles.accountInfo}>{data.id}</Text>
          <Text style={accountStyles.accountInfo}>js@students.calvin.edu</Text>
          <Text style={accountStyles.accountInfo}>123-456-7891</Text>
        </View>
      </View>

      {/* Create a Delete Account button */}
      <View style={accountStyles.accountButtonContainer}>
          <Button
            color='#75022c'
            title="Delete Account"
            onPress = {delete_check}
          />
      </View>

    </View>
  );
}
