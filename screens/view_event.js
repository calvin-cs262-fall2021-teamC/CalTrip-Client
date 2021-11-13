import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { eventStyles } from '../styles/event_style';

export default function ViewEvent({ route, navigation }) {
  return (
    <View style={eventStyles.contentContainer}>
      <View style={eventStyles.default}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{
            uri: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          }}
        />

        <Text style={{ fontWeight: "bold", padding: 15, fontSize: 24, }}> {route.params.name}</Text>

        <View style={eventStyles.eventViewTextContainer}>
          <Text style={eventStyles.eventViewEventDescription}>{route.params.description}</Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Location:</Text> {route.params.location} </Text>
          <Text style={eventStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Price: $</Text> {route.params.price} </Text>
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
