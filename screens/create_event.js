import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView, Picker } from 'react-native';
import { eventStyles } from '../styles/event_style';

export default function CreateEvent({ navigation }) {
  const [inputTitle, setTitle] = useState('');
  const [inputDescription, setDescription] = useState('');
  const [inputLocation, setLocation] = useState('');
  const [inputPrice, setPrice] = useState('');
  // for event category
  const [selectedValue, setSelectedValue] = useState('');


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
          category: selectedValue
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
