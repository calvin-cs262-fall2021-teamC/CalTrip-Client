/*
 * login.js was created to be the landing page of the application allowing users to signup, continue as a guest, or login. 
 * Navigation [FROM] landing page [TO] home.js, signup.js, helpPage.js
 * login.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React, { useState } from 'react';
import { Text, Image, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { loginStyles } from '../styles/login_style';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
 * The function LoginScreen() creates a page for logining in.
*/
export default function LoginScreen({ navigation }) {

  {/* Checks if the user entered the correct info and notify */}
  const [isLoginCorrect, setLoginCorrect] = useState(false);
  const [inputEmailAddress, setEmailAddress] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const sendData = () => {
    fetch("https://caltrip-service.herokuapp.com/user", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailAddress: inputEmailAddress,
        password: inputPassword
      })
    })
    .then((response) => {
      if(response.status == 200) {
        setLoginCorrect(true)
        return response
        login()
      }
      else {
        setLoginCorrect(false)
        throw Error('Wrong Email or Password')
      }
    })
    .then((response) => response.json())
    .then((data) => AsyncStorage.setItem('emailAddress', data.emailaddress))
    .then((data) => AsyncStorage.getItem('emailAddress'))
    // .then((email) => alert(email))
    .catch((err) => alert(err))
  }

  const login = () => {
    navigation.reset({
      index:0
    })
    navigation.navigate("Home", {})

  }
  return (
    <View style={loginStyles.container}>

      <Image source={{ uri: 'https://github.com/calvin-cs262-fall2021-teamC/CalTrip-project/blob/main/images/logos/Color%20logo%20-%20no%20background.png?raw=true' }} style={loginStyles.logo} />
      <Text style={loginStyles.slogan}>"We're going places."</Text>

      <View style={loginStyles.loginInputContainer}>

        {/* Create the email text box */}
        <View style={loginStyles.loginInputBox}>
          <TextInput style={loginStyles.loginInput}
          placeholder=" Email"
          onChangeText={text => setEmailAddress(text)}
          value={inputEmailAddress}
          />
        </View>

        {/* Create the password text box */}
        <View style={loginStyles.loginInputBox}>
          <TextInput secureTextEntry={true} style={loginStyles.loginInput}
            placeholder=" Password"
            onChangeText={text => setPassword(text)}
            value={inputPassword}
          />
        </View>

        {/* Create the login button */}
        <View style={loginStyles.login_button_location}>
          <Button
            color='#75022c'
            title="Login"
            onPress={() => {
              sendData();
              if (isLoginCorrect) {
                navigation.replace('Home', {})
              }

          }}>
          </Button>
        </View>

        {/* Create the Signup button */}
        <View style={loginStyles.signupButton}>
          <Button
            color='#75022c'
            title="Sign Up"
            onPress={() => navigation.navigate('Signup', {})}>
            <Text style={loginStyles.signupLink}>Sign Up</Text>
            </Button>
        </View>

        <View style={loginStyles.textOR}>
            <Text> ─────── OR ─────── </Text>
        </View>

        {/* Create the Guest login button */}
        <View style={loginStyles.guestButton}>
            <Button
              color='#75022c'
              title="Continue as Guest"
              onPress={() => navigation.navigate('Guest Home', {})}>
            </Button>
        </View>

      </View>

    </View>
  );
}