import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, Button, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { homeStyles } from '../styles/home_style';
import images from '../imageEvent/images'

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://caltrip-service.herokuapp.com/events`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <View style={homeStyles.homepage}>

        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('View Event', item)}>
                <ImageBackground source={images[item.category]} style={homeStyles.eventsListImageBackground}>
                  <Text style={homeStyles.textInsideContainer}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      <View style={homeStyles.wrapper}>
        <TouchableOpacity
          style={homeStyles.plusButton}
          onPress={() => navigation.navigate('Create Event', {})}>
          <Text style={homeStyles.plus}>+</Text>
        </TouchableOpacity>
      </View>

    </ScrollView >
  );
}
  // MONTH BUTTON > PLACE IN EMPTY SPOT UNDER '<View style={homeStyles.homepage}>'
  // <View style={homeStyles.month_button}>
  // <TouchableOpacity
  //   onPress={() => navigation.navigate('Month', {})}>
  //   <Text style={homeStyles.textInsideContainer}>Months</Text>
  // </TouchableOpacity>
  // </View>
