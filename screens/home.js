import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, Button, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

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

  const test_image = { uri: "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2016/07/SkiWords.jpg?fit=crop" };

  return (
    <ScrollView>
      <View style={globalStyles.homepage}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('View Event', item)}>
                <ImageBackground source={test_image} style={globalStyles.eventsListImageBackground}>
                  <Text style={globalStyles.textInsideContainer}>{item.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        )}

      </View>

      <View style={globalStyles.wrapper}>
        <View style={globalStyles.buttonv}>
          <Button
            color='#75022c'
            title="Month"
            onPress={() => {
              //  1. Navigate to the Details route with params
              navigation.navigate('Month', {});
            }} />

        </View>
        <TouchableOpacity
          style={globalStyles.plusButton}
          onPress={() => navigation.navigate('Create Event', {})}>
          <Text style={globalStyles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >
  );
}
