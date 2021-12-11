import React, { useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { signupStyles } from '../styles/signup_style';

export default function SignupScreen({ navigation }) {
  const [inputFirstName, setFirstName] = useState('');
  const [inputLastName, setLastName] = useState('');
  const [inputEmailAddress, setEmailAddress] = useState('');
  const [inputPassword, setPassword] = useState('');

  const sendData = async () => {
    try {
      const response = await fetch("https://caltrip-service.herokuapp.com/users", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: inputFirstName,
          lastName: inputLastName,
          emailAddress: inputEmailAddress,
          password: inputPassword
        })
      });

      alert( JSON.stringify(response) );
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={signupStyles.contentContainer}>
    <View style={signupStyles.scrollViewHolder}>
    <ScrollView>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>First name</Text>
          <TextInput style={signupStyles.inputBox}
            onChangeText={text => setFirstName(text)}
            value={inputFirstName}
            />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Last Name</Text>
          <TextInput style={signupStyles.inputBox}
            onChangeText={text => setLastName(text)}
            value={inputLastName}
            />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Email</Text>
          <TextInput style={signupStyles.inputBox}
            onChangeText={text => setEmailAddress(text)}
            value={inputEmailAddress}
            />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Password</Text>
          <TextInput secureTextEntry={true} style={signupStyles.inputBox}
            onChangeText={text => setPassword(text)}
            value={inputPassword}
            />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Repeat Password</Text>
          <TextInput secureTextEntry={true} style={signupStyles.inputBox}
            />
        </View>

    </ScrollView>
    </View>

    <View style={signupStyles.bottomWrapper}>
      <Button
        color='#75022c'
        title="Create account"
        onPress={() => {
          sendData();
            Alert.alert(
              "Congratulations!",
              "You successfully created an account.",
              [
                {
                  text: "OK",
                  onPress: () => { navigation.navigate('Login'); }
                }
              ]
            );
          }}
          />
      </View>
    </View>

  );
}
