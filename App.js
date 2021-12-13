/*
 * App.js file was created to contain the application side of our project CalTrip.
 *Created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
 */

// Import necessary dependencies
import * as React from 'react';
import { Image, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './styles/global';
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
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
import GuestViewEvent from './guest_screens/view_event';

/* Create a stack for the screens */
const Stack = createNativeStackNavigator();

/*
 * The function App() creates all the screens on the stack and exports the default app.
 * Most screens created in this function include a header and navigation to redirect to
 * the appropriate screen.
*/
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

        {/* This is the Home page */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview'}, ({ navigation }) => ({
          headerTitle: "Events",
          headerRight: () => (
            <HelpShared navigation={navigation} />,
            <Header navigation={navigation} />
          )
        })
        } />

        {/* This is the Signup page to create an account*/}
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />

        {/* This is the My Account page to view personal information*/}
        <Stack.Screen name="My Account" component={Account} options={({ navigation }) => ({
          headerTitle: "My Account",
          headerRight: () => (
            <SignOut navigation={navigation} />
          )
        })
        } />

        {/* This is the Create event page */}
        <Stack.Screen name="Create Event" component={CreateEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />

        {/* This is the view event page */}
        <Stack.Screen name="View Event" component={ViewEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerTitle: "",
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />

        {/* This is the join event page */}
        <Stack.Screen name="Join Event" component={JoinEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerTitle: "",
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />

        {/* This is the Guest home page */}
        <Stack.Screen name="Guest Home" component={GuestHomeScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />

        {/* This is the Guest view event page */}
        <Stack.Screen name="Guest View Event" component={GuestViewEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <HelpShared navigation={navigation} />
          )
        })
        } />


        {/* This is the Help page to guide users*/}
        <Stack.Screen name="Help Screen" component={HelpScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

// export default App;
