import React from 'react';
import { TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { globalStyles } from '../styles/global';

/*
 * The function Signout() creates a way to signout of your account.
*/
export default function SignOut({ navigation }) {

  const signout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Login' }
        ]
      })
    )
  };

  {/* Confirm the signout option */}
  const signout_check = () => {
    Alert.alert(
      "Are you sure you would like to log out?",
      "We will miss you!",
      [
        {
          text: "Yes",
          onPress: () => signout() },
        {
          text: "No",
          style:"cancel"
        }
      ]
      );
  };
    return (
        <View style={{flexDirection: 'row'}}>


          {/* Creates the logout check */}
          <View>
            <TouchableOpacity onPress = { signout_check }>
            <Image
              source={{ uri: 'https://i.ibb.co/dgqzPKb/logout.png' }}
              style={{
                height:30,
                width:30,
              }}
              />
              </TouchableOpacity>

          </View>

        </View>
    );
}
