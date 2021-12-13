/*
 * signup.js was created to allow new users to create an account using their Calvin affiliated email and a personal password.
 * After completion they are taken back to login with their new information.
 * Navigation [FROM] login.js [TO] login.js, helpPage.js
 * signup.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React, { useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { signupStyles } from '../styles/signup_style';

/*
 * The function SignupScreen() creates a page for creating an account.
*/
export default function SignupScreen({ navigation }) {
  const [inputFirstName, setFirstName] = useState('');
  const [inputLastName, setLastName] = useState('');
  const [inputEmailAddress, setEmailAddress] = useState('');
  const [inputPassword, setPassword] = useState('');

  {/* Send the information to the database */}
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

    }
    catch (error) {
      console.error(error);
    }
  }


  const validateEmail = (text) => {
    console.log(text);
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
if (reg.test(text) === false) {
  console.log("Email is Not Correct");
  this.setState({ email: text })
  return false;
}
else {
  this.setState({ email: text })
  console.log("Email is Correct");
}
  }

  return (
    <View style={signupStyles.contentContainer}>
      <View style={signupStyles.scrollViewHolder}>
        <ScrollView>
            {/* Create the First name text box */}
            <View style={signupStyles.createEventInputBox}>
              <Text style={signupStyles.subTitle}>First name</Text>
              <TextInput style={signupStyles.inputBox}
                onChangeText={text => setFirstName(text)}
                value={inputFirstName}
                />
            </View>

            {/* Create the Last name text box */}
            <View style={signupStyles.createEventInputBox}>
              <Text style={signupStyles.subTitle}>Last Name</Text>
              <TextInput style={signupStyles.inputBox}
                onChangeText={text => setLastName(text)}
                value={inputLastName}
                />
            </View>

            {/* Create the Email text box */}
            <View style={signupStyles.createEventInputBox}>
              <Text style={signupStyles.subTitle}>Email</Text>
              <TextInput style={signupStyles.inputBox}
                onChangeText={text => validateEmail(text),
                  text => setEmailAddress(text)}
                value={inputEmailAddress}
                />
            </View>

            {/* Create the Password text box */}
            <View style={signupStyles.createEventInputBox}>
              <Text style={signupStyles.subTitle}>Password</Text>
              <TextInput secureTextEntry={true} style={signupStyles.inputBox}
                onChangeText={text => setPassword(text)}
                value={inputPassword}
                />
            </View>

            {/* Create the Repeat password text box */}
            <View style={signupStyles.createEventInputBox}>
              <Text style={signupStyles.subTitle}>Repeat Password</Text>
              <TextInput secureTextEntry={true} style={signupStyles.inputBox}
                />
            </View>

        </ScrollView>
      </View>

      {/* Confirm the creation of an account */}
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
