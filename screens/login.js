import React, { useState } from 'react';
import { Text, Image, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { loginStyles } from '../styles/login_style';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation }) {

  const [inputEmailAddress, setEmailAddress] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [error, setError] = useState("FALSE");
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
      if(response.status === 500) throw Error('login error')
      setError("FALSE")
      return response
    })
    .then((response) => response.json())
    .then((data) => AsyncStorage.setItem('emailAddress', data.emailaddress))
    .then((data) => AsyncStorage.getItem('emailAddress'))
    // .then((email) => alert(email))
    .catch((err) => {
      alert(err)
    })

  }
  return (
    <View style={loginStyles.container}>

      <Image source={{ uri: 'https://github.com/calvin-cs262-fall2021-teamC/CalTrip-project/blob/main/images/logos/Color%20logo%20-%20no%20background.png?raw=true' }} style={loginStyles.logo} />

      <Text style={loginStyles.slogan}>"We're going places."</Text>



      <View style={loginStyles.loginInputContainer}>

        <View style={loginStyles.loginInputBox}>
          <TextInput style={loginStyles.loginInput}
          placeholder=" Email"
          onChangeText={text => {
            setEmailAddress(text)
          }}
          value={inputEmailAddress}
          />
        </View>

        <View style={loginStyles.loginInputBox}>
          <TextInput secureTextEntry={true} style={loginStyles.loginInput}
          placeholder=" Password"
          onChangeText={text => {
            setPassword(text)
          }}
          value={inputPassword}
          />
        </View>

        <View style={loginStyles.login_button_location}>
        <Button
          color='#75022c'
          title="Login"
          onPress={() => {
            sendData();
            navigation.navigate('Home', {})}
          }>
        </Button>
        </View>

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

        <View style={loginStyles.guestButton}>
            <Button
              color='#75022c'
              title="Contiue as Guest"
              onPress={() => navigation.navigate('Guest Home', {})}>
            </Button>
        </View>

      </View>

    </View>
  );
}
