import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView, Picker } from 'react-native';
import { eventStyles } from '../styles/event_style';

export default function CreateEvent({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java");
  const [inputTitle, setTitle] = useState('');
  const [inputDescription, setDescription] = useState('');
  const [inputLocation, setLocation] = useState('');
  const [inputPrice, setPrice] = useState('');

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
          price: inputPrice
        })
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={eventStyles.contentContainer}>
      <ScrollView>

        <View style={eventStyles.createEventContentContainer}>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Title</Text>
            <TextInput style={eventStyles.inputBox}
              onChangeText={text => setTitle(text)}
              value={inputTitle}
              placeholder="Type title of the event..."
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Description</Text>
            <TextInput style={eventStyles.inputBox}
              onChangeText={text => setDescription(text)}
              value={inputDescription}
              placeholder="Introduce the details of the event..."
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Address</Text>
            <TextInput style={eventStyles.inputBox}
              onChangeText={text => setLocation(text)}
              value={inputLocation}
              placeholder="Type address of the event..."
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Price</Text>
            <TextInput style={eventStyles.inputBox}
              keyboardType='numeric'
              onChangeText={number => setPrice(number)}
              value={inputPrice}
              placeholder="Type price of the event..."
            />
          </View>


        </View>

        <View style={{ width: "100%", margin: 5, paddingHorizontal: 3 }}>
          <Text style={eventStyles.subTitle}>Category</Text>
        </View>
        <View style={eventStyles.createEventPickerBox}>

          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Choose a category" value="NULL" />
            <Picker.Item label="Agritourism" value="agritourism" />
            <Picker.Item label="Art" value="art" />
            <Picker.Item label="Beach" value="beach" />
            <Picker.Item label="Camping" value="camping" />
            <Picker.Item label="City" value="city" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Grocery" value="sport" />
            <Picker.Item label="Hiking" value="hiking" />
            <Picker.Item label="Nature" value="nature" />
            <Picker.Item label="Shopping" value="shopping" />
            <Picker.Item label="Sports" value="sports" />
            <Picker.Item label="Water sport" value="water_sport" />
            <Picker.Item label="Winter sport" value="winter_sport" />
          </Picker>
        </View>

      </ScrollView>

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
                  onPress: () => { navigation.navigate('Home'); }
                }
              ]
            );
          }}
        />
      </View>
    </View>
  );
}
