import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function CreateEvent({ navigation }) {
  return (
    <ScrollView>
      <View style={globalStyles.contentContainer}>
        <View style={globalStyles.creteEventContentContainer}>

          <View style={globalStyles.createEventInputBox}>
            <Text style={globalStyles.subTitle}>Title</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder="Type title of the event..."
            />
          </View>

          <View style={globalStyles.createEventInputBox}>
            <Text style={globalStyles.subTitle}>Address</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder="Type address of the event..."
            />
          </View>

          <View style={globalStyles.createEventInputBox}>
            <Text style={globalStyles.subTitle}>Start date</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder="(mm/dd/yyyy)"
            />
          </View>

          <View style={globalStyles.createEventInputBox}>
            <Text style={globalStyles.subTitle}>End date</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder="(mm/dd/yyyy)"
            />
          </View>

          <View style={globalStyles.createEventInputBox}>
            <Text style={globalStyles.subTitle}>Price</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder="Type price of the event..."
            />
          </View>

          <View style={globalStyles.createEventInputBox}>
            <Text style={globalStyles.subTitle}>Description</Text>
            <TextInput style={globalStyles.inputBox}
              placeholder="Introduce the details of the event..."
            />
          </View>

        </View>
        <View style={globalStyles.bottomWrapper}>
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
    </ScrollView>
  );
}
