import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ViewEvent({ navigation }) {
  return (
    <View style={globalStyles.contentContainer}>
      <View style={globalStyles.default}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{
            uri: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          }}
        />

        <Text style={{ fontWeight: "bold", padding: 15, fontSize: 24, }} >Skiing</Text>

        <View style={globalStyles.eventViewTextContainer}>
          <Text style={globalStyles.eventViewEventDescription}>Are you ready to go for  skiing?
            Actually, no, there is no snow yet...But if there was, here are the details of the event!</Text>

          <Text style={globalStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Location:</Text> Cannonsburg Ski Area</  Text>

          <Text style={globalStyles.eventViewEventDescription}><Text style={{ fontWeight: "bold" }}>Price: </Text>$30</Text>
        </View>

      </View>



      <View style={globalStyles.bottomWrapper}>
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
