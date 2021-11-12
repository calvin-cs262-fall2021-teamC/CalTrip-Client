import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SignupScreen({ navigation }) {
  return (
    <View style={globalStyles.contentContainer}>
    <ScrollView>

      <View style={globalStyles.createEventContentContainer}>

        <View style={globalStyles.createEventInputBox}>
          <Text style={globalStyles.subTitle}>First name</Text>
          <TextInput style={globalStyles.inputBox}
            />
        </View>

        <View style={globalStyles.createEventInputBox}>
          <Text style={globalStyles.subTitle}>Last Name</Text>
          <TextInput style={globalStyles.inputBox}
        />
        </View>

        <View style={globalStyles.createEventInputBox}>
          <Text style={globalStyles.subTitle}>Email</Text>
          <TextInput style={globalStyles.inputBox}
            />
        </View>

        <View style={globalStyles.createEventInputBox}>
          <Text style={globalStyles.subTitle}>Password</Text>
          <TextInput secureTextEntry={true} style={globalStyles.inputBox}
            />
        </View>

        <View style={globalStyles.createEventInputBox}>
          <Text style={globalStyles.subTitle}>Repeate Password</Text>
          <TextInput secureTextEntry={true} style={globalStyles.inputBox}
            />
        </View>

      </View>
      </ScrollView>

    <View style={globalStyles.bottomWrapper}>
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
