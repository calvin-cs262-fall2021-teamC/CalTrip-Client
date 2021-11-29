import React, { useState } from 'react';
import { Text, Image, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { loginStyles } from '../styles/login_style';


export default function LoginScreen({ navigation }) {

  return (
    <View style={loginStyles.container}>

      <Image source={{ uri: 'https://github.com/calvin-cs262-fall2021-teamC/CalTrip-project/blob/main/images/logos/Color%20logo%20-%20no%20background.png?raw=true' }} style={loginStyles.logo} />

      <Text style={loginStyles.slogan}>"We're going places."</Text>

      

      <View style={loginStyles.loginInputContainer}>

        <View style={loginStyles.loginInputBox}>
          <TextInput style={loginStyles.loginInput}
          placeholder=" Email"
          />
        </View>

        <View style={loginStyles.loginInputBox}>
          <TextInput secureTextEntry={true} style={loginStyles.loginInput}
          placeholder=" Password"
          />
        </View>

        <View style={loginStyles.login_button_location}>
        <Button
          color='#75022c'
          title="Login"
          onPress={() => {
            // alert reference: https://reactnative.dev/docs/alert
            Alert.alert(
              "Login Page",
              "This is where you will login <3",
              [
                {
                  text: "        Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "        Guest",
                  onPress: () => { navigation.navigate('Home', {}); }
                },
                {
                  text: "        Knight",
                  onPress: () => { navigation.navigate('Home', {}); }
                }
              ]
            );
          }}
        />
        </View>

        <View style={loginStyles.signupButton}>
        <Button
          color='#75022c'
          title="Sign Up"
          onPress={() => navigation.navigate('Signup', {})}>
          <Text style={loginStyles.signupLink}>Sign Up</Text>
        </Button>
        </View>

      </View>


    </View>
  );
}
