/*
 * home.js was created to display the events available to the users using GET from the database. It also is the “post sign-in” hub for all of the functions of the application (account accessibility, viewing an event and help screen).
 * Navigation [FROM] *.js [TO] *.js
 * home.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, Button, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { homeStyles } from '../styles/home_style';
import images from '../imageEvent/images'

/*
 * The function GuestHomeScreen() creates the guest homepage that diplays the events.
*/
export default function GuestHomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  {/* Fetches the events created from the database */}
  useEffect(() => {
    fetch(`https://caltrip-service.herokuapp.com/events`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
      <View style={homeStyles.homepage}>

      {/* Create a scrollview list of events for guests */}
      <ScrollView>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Guest View Event', item)}>
                <ImageBackground source={images[item.category]} style={homeStyles.eventsListImageBackground}>
                  <Text style={homeStyles.textInsideContainer}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView >

    </View>
  );
}

