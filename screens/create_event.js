import React, {useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView, Picker } from 'react-native';
import { eventStyles } from '../styles/event_style';

export default function CreateEvent({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java");

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

        <View style={{width:"100%", margin:5, paddingHorizontal:3}}>
          <Text style={eventStyles.subTitle}>Category</Text>
        </View>
        <View style={eventStyles.createEventPickerBox}>

          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Choose a category" value="NULL" />
            <Picker.Item label="Agritourism" value="agritourism"/>
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
