/*
 * create_event.js was created to allow users to create events to post. When an event is created it is POST-ed to the database server and displayed on the home screen.
 * Navigation [FROM] home.js [TO] home.js, helpPage.js
 * create_event.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView, Picker } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { eventStyles } from '../styles/event_style';
import { CommonActions } from '@react-navigation/native';


/*
 * The function CreateEvent() performs the action of taking an input and creating an event.
*/
export default function CreateEvent({ navigation }) {
  const [inputTitle, setTitle] = useState('');
  const [inputDescription, setDescription] = useState('');
  const [inputLocation, setLocation] = useState('');
  const [inputPrice, setPrice] = useState('');
  const [inputStartDate, setStartDate] = useState('');
  const [inputEndDate, setEndDate] = useState('');
  // for event category
  const [selectedValue, setSelectedValue] = useState('');

  {/* POST the date to the database */}
  const sendData = async () => {
    try {
      const response = await fetch('https://caltrip-service.herokuapp.com/events', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: inputTitle,
          description: inputDescription,
          location: inputLocation,
          price: inputPrice,
          startDate: inputStartDate,
          endDate: inputEndDate,
          category: selectedValue
        })
      });
    }
    catch (error) {
      console.error(error);
    }
    const isValid = dateTimeField.isValid()
    console.log(isValid)
  }

  const goHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' }
        ]
      })
    )
  };

  {/* This returns the page Create event */}
  return (
    <View style={eventStyles.contentContainer}>
      <ScrollView>

        <View style={eventStyles.createEventContentContainer}>

          {/* Title of the event */}
          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Title</Text>
            <TextInput style={eventStyles.inputBox}
              onChangeText={text => setTitle(text)}
              value={inputTitle}
              placeholder="Type title of the event..."
            />
          </View>

          {/* Description of the event */}
          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Description</Text>
            <TextInput style={eventStyles.inputBox}
              onChangeText={text => setDescription(text)}
              value={inputDescription}
              placeholder="Introduce the details of the event..."
            />
          </View>

          {/* Address of the event */}
          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Address</Text>
            <TextInput style={eventStyles.inputBox}
              onChangeText={text => setLocation(text)}
              value={inputLocation}
              placeholder="Type address of the event..."
            />
          </View>

          {/* Price of the event */}
          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Price</Text>
            <TextInput style={eventStyles.inputBox}
              keyboardType='numeric'
              onChangeText={number => setPrice(number)}
              value={inputPrice}
              placeholder="Type price of the event..."
            />
          </View>

          {/* Start date of the event */}
          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Start Date</Text>
            <TextInputMask style={eventStyles.inputBox}
              type={'datetime'}
              keyboardType='numeric'
              options={{
                format: 'YYYY/MM/DD'
              }}
              onChangeText={number => setStartDate(number)}
              value={inputStartDate}
              placeholder="YYYY/MM/DD"
            />
          </View>

          {/* End date of the event */}
          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>End Date</Text>
            <TextInputMask style={eventStyles.inputBox}
              type={'datetime'}
              keyboardType='numeric'
              options={{
                format: 'YYYY/MM/DD'
              }}
              value={inputEndDate}
              placeholder="YYYY/MM/DD"
              onChangeText={number => setEndDate(number)}
            />
          </View>

        </View>

        {/* Create category of events */}
        <View style={{ width: "100%", margin: 5, paddingHorizontal: 3 }}>
          <Text style={eventStyles.subTitle}>Category</Text>
        </View>

        {/* The categories */}
        <View style={eventStyles.createEventPickerBox}>

          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Choose a category" value={0} />
            <Picker.Item label="Agritourism" value={1} />
            <Picker.Item label="Art" value={2} />
            <Picker.Item label="Beach" value={3} />
            <Picker.Item label="Camping" value={4} />
            <Picker.Item label="City" value={5} />
            <Picker.Item label="Food" value={6} />
            <Picker.Item label="Grocery" value={7} />
            <Picker.Item label="Hiking" value={8} />
            <Picker.Item label="Nature" value={9} />
            <Picker.Item label="Shopping" value={10} />
            <Picker.Item label="Sports" value={11} />
            <Picker.Item label="Water sport" value={12} />
            <Picker.Item label="Winter sport" value={13} />
          </Picker>
        </View>

      </ScrollView>

      {/* Confirm creation of the event */}
      <View style={eventStyles.bottomWrapper}>
        <Button
          marginBottom='5%'
          color='#75022c'
          title="Create Event"
          onPress={() => {
            sendData();
            Alert.alert(
              "Congratulations!",
              "You successfully created the trip.",
              [
                {
                  text: "OK",
                  onPress: () => goHome()
                }
              ]
            );
          }}
        />
      </View>
    </View>
  );
}
