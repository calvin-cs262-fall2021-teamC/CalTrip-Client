import React, { useState } from 'react';
import { Text, Image, View, Button, Alert, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';


export default function LoginScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>

      <Image source={{ uri: 'https://github.com/calvin-cs262-fall2021-teamC/CalTrip-project/blob/main/images/logos/Color%20logo%20-%20no%20background.png?raw=true' }} style={globalStyles.logo} />

      <Text style={globalStyles.slogan}>"We're going places."</Text>

      <View style={globalStyles.loginInputContainer}>

        <View style={globalStyles.loginInputBox}>
          <TextInput style={globalStyles.loginInput}
          placeholder=" Email"
          />
        </View>

        <View style={globalStyles.loginInputBox}>
          <TextInput style={globalStyles.loginInput}
          placeholder=" Password"
          />
        </View>

      </View>

      <View style={globalStyles.login_button_location}>

        <Button
          color='#75022c'
          title="Login to continue"
          onPress={() => {
            // alert reference: https://reactnative.dev/docs/alert
            Alert.alert(
              "Login Page",
              "This is where you will login <3",
              [
                {
                  text: "Continue as Guest",
                  onPress: () => { navigation.navigate('Home', {}); }
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "OK",
                  onPress: () => { navigation.navigate('Home', {}); }
                }
              ]
            );
          }}
          />
      </View>
    </View>
  );
}
