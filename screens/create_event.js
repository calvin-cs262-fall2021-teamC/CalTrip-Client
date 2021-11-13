import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { eventStyles } from '../styles/event_style';

export default function CreateEvent({ navigation }) {
  return (
      <View style={eventStyles.contentContainer}>
      <ScrollView>

        <View style={eventStyles.createEventContentContainer}>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Title</Text>
            <TextInput style={eventStyles.inputBox}
              placeholder="Type title of the event..."
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Address</Text>
            <TextInput style={eventStyles.inputBox}
              placeholder="Type address of the event..."
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Start date</Text>
            <TextInput style={eventStyles.inputBox}
              placeholder="(mm/dd/yyyy)"
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>End date</Text>
            <TextInput style={eventStyles.inputBox}
              placeholder="(mm/dd/yyyy)"
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Price</Text>
            <TextInput style={eventStyles.inputBox}
              placeholder="Type price of the event..."
            />
          </View>

          <View style={eventStyles.createEventInputBox}>
            <Text style={eventStyles.subTitle}>Description</Text>
            <TextInput style={eventStyles.inputBox}
              placeholder="Introduce the details of the event..."
            />
          </View>
        </View>
        </ScrollView>

        <View style={eventStyles.bottomWrapper}>
          <Button
            marginBottom='5%'
            color='#75022c'
            title="Create Event"
            onPress={() => {
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
