import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Picker, StyleSheet, Alert } from 'react-native';
import { eventStyles } from '../styles/event_style';
import { joinStyles } from '../styles/join_style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JoinEvent({ route, navigation }) {
  const [inputEventID, setEventId] = useState("");
  const [inputID, setID] = useState('');
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSeatsNum, setSelectedSeatsNum] = useState("");

  const joinEvent = async () => {
    const eventID = await AsyncStorage.getItem('eventID')
    const userID = await AsyncStorage.getItem('userID')
    fetch(("https://caltrip-service.herokuapp.com/events/1/"), {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            eventID: eventID,
            userID: userID,
            status: selectedStatus,
            seats: selectedSeatsNum
        })
    })
        .catch((err) => alert(err))
}

  return (
    <View style={joinStyles.contentContainer}>
      <View style={joinStyles.joinEventContainer}>
        <Text style={joinStyles.title}>Select the following</Text>
        
        {/* <Text style={joinStyles.subTitle}>EVENT ID PLACEHOLDER</Text>
        <TextInput style={joinStyles.inputBox}
          onChangeText={text => setEventId(text)}
          value={inputEventID}
          placeholder="TYPE EVENT ID (CHANGE LATER)"
        /> */}
{/* 
        <Text style={joinStyles.subTitle}>USER ID PLACEHOLDER</Text>
        <TextInput style={joinStyles.inputBox}
          onChangeText={text => setID(text)}
          value={inputID}
          placeholder="TYPE USER ID (CHANGE LATER)"
        /> */}

        <Text style={joinStyles.subTitle}>Are you a rider or driver?</Text>

        <View style={joinStyles.joinEventPickerBox}>
          <Picker
            selectedValue={selectedStatus}
            onValueChange={(itemValue) => setSelectedStatus(itemValue)}
            value={selectedStatus}
          >
            <Picker.Item label="Choose a role" value="NULL" />
            <Picker.Item label="Rider" value="rider" />
            <Picker.Item label="Driver" value="driver" />
          </Picker>
        </View>

        <Text style={joinStyles.subTitle}>If driver, how many people can you take?</Text>

        <View style={joinStyles.joinEventPickerBox}>
          <Picker
            selectedValue={selectedSeatsNum}
            onValueChange={(itemValue) => setSelectedSeatsNum(itemValue)}
          >
            <Picker.Item label="Choose a number" value="NULL" />
            <Picker.Item label="0" value={0} />
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="6" value={6} />
            <Picker.Item label="7" value={7} />
            <Picker.Item label="8" value={8} />
            <Picker.Item label="9" value={9} />
            <Picker.Item label="10" value={10} />
            <Picker.Item label="11" value={11} />
          </Picker>
        </View>
      </View>

      <View style={joinStyles.bottomWrapper}>
        <Button
          color='#75022c'
          title="Join"
          onPress={() => {
            joinEvent();
            Alert.alert(
              "Congratulations!",
              "You successfully joined the trip.",
              [
                {
                  text: "OK",
                  onPress: () => {
                    navigation.navigate('Home', {});
                  }
                }
              ]
            );
          }}
        />
      </View>
    </View>

  );
}
