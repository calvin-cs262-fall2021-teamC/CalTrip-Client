import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { signupStyles } from '../styles/signup_style';

export default function SignupScreen({ navigation }) {
  return (
    <View style={signupStyles.contentContainer}>
    <ScrollView>

      <View style={signupStyles.createEventContentContainer}>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>First name</Text>
          <TextInput style={signupStyles.inputBox}
            />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Last Name</Text>
          <TextInput style={signupStyles.inputBox}
        />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Email</Text>
          <TextInput style={signupStyles.inputBox}
            />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Password</Text>
          <TextInput secureTextEntry={true} style={signupStyles.inputBox}
            />
        </View>

        <View style={signupStyles.createEventInputBox}>
          <Text style={signupStyles.subTitle}>Repeat Password</Text>
          <TextInput secureTextEntry={true} style={signupStyles.inputBox}
            />
        </View>

      </View>
      </ScrollView>

    <View style={signupStyles.bottomWrapper}>
      <Button
        color='#75022c'
        title="Create account"
        onPress={() => {
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
