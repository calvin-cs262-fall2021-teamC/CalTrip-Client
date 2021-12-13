/*
 * join_event.js was created to allow the users to join an event as a rider or driver. 
 * Navigation [FROM] view_event.js [TO] home.js, helpPage.js
 * join_event.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Picker, StyleSheet, Alert } from 'react-native';
import { joinStyles } from '../styles/join_style';

/*
 * The function JoinEvent() creates a page for joining an event.
*/
export default function JoinEvent({ navigation }) {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSeatsNum, setSelectedSeatsNum] = useState("");

  return (
    <View style={joinStyles.contentContainer}>

      {/* Creates a dropdown choice of either rider or driver */}
      <View style={joinStyles.joinEventContainer}>
        <Text style={joinStyles.title}>Select the following</Text>
        <Text style={joinStyles.subTitle}>Are you a rider or driver?</Text>

        <View style={joinStyles.joinEventPickerBox}>
          <Picker
            selectedValue={selectedStatus}
            onValueChange={(itemValue, itemIndex) => setSelectedStatus(itemValue)}
            >
            <Picker.Item label="Choose a role" value="NULL" />
            <Picker.Item label="Rider" value="rider" />
            <Picker.Item label="Driver" value="driver" />
            </Picker>
        </View>

        <Text style={joinStyles.subTitle}>If driver, how many people can you take?</Text>

        {/* Creates a dropdown choice of available sit in the car */}
        <View style={joinStyles.joinEventPickerBox}>
          <Picker
            selectedValue={selectedSeatsNum}
            onValueChange={(itemValue, itemIndex) => setSelectedSeatsNum(itemValue)}
            >
            <Picker.Item label="Choose a number" value="NULL" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            </Picker>
        </View>
      </View>

      {/* Confirm that the user joined an event */}
      <View style={joinStyles.bottomWrapper}>
        <Button
          color= '#75022c'
          title="Join"
          onPress={() => {
            Alert.alert(
              "Congratulations!",
              "You successfully joined the trip.",
              [
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
