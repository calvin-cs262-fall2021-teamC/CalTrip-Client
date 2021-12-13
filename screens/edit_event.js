import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert, ScrollView, Picker } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { eventStyles } from '../styles/event_style';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
 * The function CreateEvent() performs the action of taking an input and creating an event.
*/
export default function EditEvent({ route, navigation }) {
    const [editTitle, changeTitle] = useState('');
    const [editDescription, changeDescription] = useState('');
    const [editLocation, changeLocation] = useState('');
    const [editPrice, changePrice] = useState('');
    const [editStartDate, changeStartDate] = useState('');
    const [editEndDate, changeEndDate] = useState('');
    // for event category
    const [editSelectedValue, changeSelectedValue] = useState('');

    const changeData = async () => {
        // const id = await AsyncStorage.getItem('id')
        fetch(("https://caltrip-service.herokuapp.com/events/1"), {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // eventID: id,
                title: editTitle,
                description: editDescription,
                location: editLocation,
                price: editPrice,
                startDate: editStartDate,
                endDate: editEndDate,
                category: editSelectedValue
            })
        })
            .catch((err) => alert(err))
    }

    {/* This returns the page Create event */ }
    return (
        <View style={eventStyles.contentContainer}>
            <ScrollView>

                <View style={eventStyles.createEventContentContainer}>

                    {/* Title of the event */}
                    <View style={eventStyles.createEventInputBox}>
                        <Text style={eventStyles.subTitle}>Title</Text>
                        <TextInput style={eventStyles.inputBox}
                            onChangeText={text => changeTitle(text)}
                            value={editTitle}
                            placeholder="Event title shows here..."
                        />
                    </View>

                    {/* Description of the event */}
                    <View style={eventStyles.createEventInputBox}>
                        <Text style={eventStyles.subTitle}>Description</Text>
                        <TextInput style={eventStyles.inputBox}
                            onChangeText={text => changeDescription(text)}
                            value={editDescription}
                            placeholder="Event description shows here..."
                        />
                    </View>

                    {/* Address of the event */}
                    <View style={eventStyles.createEventInputBox}>
                        <Text style={eventStyles.subTitle}>Address</Text>
                        <TextInput style={eventStyles.inputBox}
                            onChangeText={text => changeLocation(text)}
                            value={editLocation}
                            placeholder="Event address shows here..."
                        />
                    </View>

                    {/* Price of the event */}
                    <View style={eventStyles.createEventInputBox}>
                        <Text style={eventStyles.subTitle}>Price</Text>
                        <TextInput style={eventStyles.inputBox}
                            keyboardType='numeric'
                            onChangeText={number => changePrice(number)}
                            value={editPrice}
                            placeholder="Event price shows here..."
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
                            onChangeText={number => changeStartDate(number)}
                            value={editStartDate}
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
                            value={editEndDate}
                            placeholder="YYYY/MM/DD"
                            onChangeText={number => changeEndDate(number)}
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
                        selectedValue={editSelectedValue}
                        onValueChange={(itemValue) => changeSelectedValue(itemValue)}
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
                    title="Edit Event"
                    onPress={() => {
                        changeData();
                        Alert.alert(
                            "Congratulations!",
                            "You successfully edited the trip.",
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
