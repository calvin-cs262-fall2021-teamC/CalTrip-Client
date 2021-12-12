import * as React from 'react';
import { Image, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './styles/global';
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import MonthsScreen from "./screens/months";
import HelpScreen from "./screens/helpPage";
import Header from "./shared/header";
import HelpShared from "./shared/help";
import Account from './screens/account';
import CreateEvent from './screens/create_event';
import JoinEvent from './screens/join_event';
import ViewEvent from './screens/view_event';
import SignupScreen from './screens/signup';
import SignOut from './shared/signout';

import GuestHomeScreen from "./guest_screens/home";
import GuestMonthsScreen from "./guest_screens/months";
import GuestHelpScreen from "./guest_screens/helpPage";
import GuestViewEvent from './guest_screens/view_event';



function ski_trip({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Image source={{ uri: 'https://i.imgur.com/uRdQKnz.jpeg' }} style={globalStyles.act_pic} />
      <Text style={globalStyles.eventTitle}>Title</Text>
      <Text style={globalStyles.eventDate}>Date</Text>
      <Text style={globalStyles.eventDescription}>Description here</Text>
      <Button title="Give a Ride" onPress={() => navigation.navigate('Give a Ride')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* The landing page will be the Login page */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerTitle: "",
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview'}, ({ navigation }) => ({
          headerTitle: "Events",
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />

        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />

        <Stack.Screen name="My Account" component={Account} options={({ navigation }) => ({
          headerTitle: "",
          headerRight: () => (
            <SignOut navigation={navigation} />
          )
        })
        } />

        <Stack.Screen name="Create Event" component={CreateEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />
        <Stack.Screen name="View Event" component={ViewEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />
        <Stack.Screen name="Join Event" component={JoinEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />

        <Stack.Screen name="Month" component={MonthsScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />




        <Stack.Screen name="Guest Home" component={GuestHomeScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
        })
        } />

        <Stack.Screen name="Guest View Event" component={GuestViewEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
        })
        } />

        <Stack.Screen name="Guest Month" component={GuestMonthsScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
        })
        } />




        <Stack.Screen name="Help Screen" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
