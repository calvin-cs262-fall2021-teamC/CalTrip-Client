import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { eventStyles } from '../styles/event_style';
import images from '../imageEvent/images'

export default function ViewEvent({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://caltrip-service.herokuapp.com/events/${route.params.id}/users`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={eventStyles.contentContainer}>
      <View style={eventStyles.default}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={images[route.params.category]}
        />
        <Text style={{ fontWeight: "bold", padding: 15, fontSize: 24 }}> {route.params.title}</Text>

        <View style={eventStyles.eventViewTextContainer}>
          <Text style={eventStyles.eventViewEventDescription}>{route.params.description}</Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Start Date:</Text> {route.params.startdate}</Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>End Date:</Text>{route.params.enddate}</Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Location:</Text> {route.params.location} </Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Price: $</Text> {route.params.price} </Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}> NAME  ||  STATUS  || SEATS AVAILABLE</Text></Text>
          
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.firstname} {item.lastname} || {item.status} || {item.seats} seats</Text>
              )}
            />
          )}
        
        </View>
      </View>




      <View style={eventStyles.bottomWrapper}>
        <Button
          color='#75022c'
          title="Join Event"
          onPress={() => {
            //  1. Navigate to the Details route with params
            navigation.navigate('Join Event');
          }} />
      </View>


    </View>

  );
}
