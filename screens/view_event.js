/*
 * view _event.js was created to allow users to view the details of the events listed on home.js. The information is displayed using GET and allows users to join said event or return to home.
 * Navigation [FROM] home.js [TO] join_event.js, home.js, helpPage.js
 * view_event.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { eventStyles } from '../styles/event_style';
import images from '../imageEvent/images'

/*
 * The function ViewEvent() creates a page for viewing an event.
*/
export default function ViewEvent({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  {/* Fetches the specific event */}
  useEffect(() => {
    fetch(`https://caltrip-service.herokuapp.com/events/${route.params.id}/users`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Date:</Text> {route.params.to_char}</Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Location:</Text> {route.params.location} </Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Price: $</Text> {route.params.price} </Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}> NAME  ||  STATUS  || SEATS AVAILABLE</Text></Text>
          
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text style={eventStyles.eventViewEventDescription}>{item.firstname} {item.lastname}   ||      {item.status}      ||     {item.seats}                 </Text>
              )}
            />
          )}
        
        </View>
      </View>
      
      {/* Create a join event button */}
      <View style={eventStyles.bottomWrapper}>
        <View style={eventStyles.buttons}>
          <Button
            color='#75022c'
            title="Edit Event"
            onPress={() => {
              //  1. Navigate to the Details route with params
              navigation.navigate('Edit Event');
            }} />
        </View>
        <View style={eventStyles.buttons}>
          <Button
            color='#75022c'
            title="Join Event"
            onPress={() => {
              //  1. Navigate to the Details route with params
              navigation.navigate('Join Event');
            }} />
        </View>
      </View>

    </View>

  );
}
