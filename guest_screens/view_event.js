/*
 * view _event.js was created to allow guests to view the details of the events listed on home.js. 
 * Navigation [FROM] home.js [TO], home.js, helpPage.js
 * view_event.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { eventStyles } from '../styles/event_style';
import images from '../imageEvent/images'

/*
 * The function GuestViewEvent() creates a page for viewing an event for the guest.
*/
export default function GuestViewEvent({ route, navigation }) {
  return (
    <View style={eventStyles.contentContainer}>

      {/* Displays the event information */}
      <View style={eventStyles.default}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={images[route.params.category]}
        />
        <Text style={{ fontWeight: "bold", padding: 15, fontSize: 24 }}> {route.params.title}</Text>

        <View style={eventStyles.eventViewTextContainer}>
          <Text style={eventStyles.eventViewEventDescription}>{route.params.description}</Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Date:</Text> {route.params.startdate}</Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Location:</Text> {route.params.location} </Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Price: $</Text> {route.params.price} </Text>
        </View>

      </View>

    </View>

  );
}
