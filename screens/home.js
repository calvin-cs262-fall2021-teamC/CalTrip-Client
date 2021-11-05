import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {

  const test_image = { uri: "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2016/07/SkiWords.jpg?fit=crop" };

  const meijer_image = { uri: "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Meijer%20supercenter%20exterior.jpg?itok=GGkiO9BI" };
  const rockClimbing_image = { uri: "https://media.self.com/photos/5d8a5f472aa2920009962a7e/4:3/w_2560%2Cc_limit/GettyImages-699099379.jpg" };
  const movie_image = { uri: "https://s.wsj.net/public/resources/images/ON-CE927_moviet_B1280_20170714200426.jpg" };
  const beach_image = { uri: "https://res.cloudinary.com/miles-extranet-dev/image/upload/ar_16:9,c_fill,w_1000,g_face,q_50/Michigan/account_photos/7003/a3d989434d77bb24952c5960b2e30154_BeachScene.jpg" };
  const skydive_image = { uri: "https://www.insideedition.com/sites/default/files/styles/video_1920x1080/public/images/2018-11/112818-sjydiving2-1280x720.jpg?h=c673cd1c&width=1170&height=658" };
  

  return (
    <View style={globalStyles.homepage}>
      <View style={globalStyles.eventsViewEventsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('View Event', {})}>
          <ImageBackground source={test_image} style={globalStyles.eventsListImageBackground}>
            <Text style={globalStyles.textInsideContainer}>Skiing</Text>
          </ImageBackground>
        </TouchableOpacity>
 
        <TouchableOpacity
          onPress={() => navigation.navigate('View Event', {})}>
          <ImageBackground source={movie_image} style={globalStyles.eventsListImageBackground}>
            <Text style={globalStyles.textInsideContainer}>Movie</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('View Event', {})}>
          <ImageBackground source={rockClimbing_image} style={globalStyles.eventsListImageBackground}>
            <Text style={globalStyles.textInsideContainer}>Rock Climbing</Text>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('View Event', {})}>
          <ImageBackground source={meijer_image} style={globalStyles.eventsListImageBackground}>
            <Text style={globalStyles.textInsideContainer}>Grocery Store</Text>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('View Event', {})}>
          <ImageBackground source={beach_image} style={globalStyles.eventsListImageBackground}>
            <Text style={globalStyles.textInsideContainer}>Beach</Text>
          </ImageBackground>
        </TouchableOpacity>


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
    </View>
  );
}
