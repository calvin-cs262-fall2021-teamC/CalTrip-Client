import * as React from 'react';
import { Image, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './styles/global';
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import MonthsScreen from "./screens/months";
import Jan_month from "./screens/january";
import Header from "./shared/header";
import Account from './screens/account';
import CreateEvent from './screens/create_event';
import JoinEvent from './screens/join_event';
import ViewEvent from './screens/view_event';
import SignupScreen from './screens/signup';

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

function Ride() {
  return (
    <View style={globalStyles.eventDescription}>
      <Text>ride options</Text>
    </View>
  )
}

function Feb_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>February Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Mar_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>March Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Apr_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>April Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function May_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>May Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Jun_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>June Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Jul_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>July Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Aug_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>August Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Sep_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>September Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Oct_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>October Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Nov_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>November Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Dec_month({ route, navigation }) {
  return (
    <View style={globalStyles.default}>
      <Text>December Activities</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ActivitiesScreen({ route, navigation }) {
  /* 2. Get the param */
  // const { itemId, otherParam } = route.params;
  return (
    <View style={globalStyles.default}>
      <Text>Details Screen</Text>
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Listed Activities', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}
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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />

        <Stack.Screen name="Signup" component={SignupScreen} />

        <Stack.Screen name="My Account" component={Account} />

        <Stack.Screen name="Create Event" component={CreateEvent} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />
        <Stack.Screen name="View Event" component={ViewEvent} />
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
        <Stack.Screen name="Listed Activities" component={ActivitiesScreen} options={{ title: 'Overview' }, ({ navigation }) => ({
          headerRight: () => (
            <Header navigation={navigation} />
          )
        })
        } />
        <Stack.Screen name="January Activities" component={Jan_month} />
        <Stack.Screen name="Skiing Trip" component={ski_trip} />
        <Stack.Screen name="Give a Ride" component={Ride} />
        <Stack.Screen name="February Activities" component={Feb_month} />
        <Stack.Screen name="March Activities" component={Mar_month} />
        <Stack.Screen name="April Activities" component={Apr_month} />
        <Stack.Screen name="May Activities" component={May_month} />
        <Stack.Screen name="June Activities" component={Jun_month} />
        <Stack.Screen name="July Activities" component={Jul_month} />
        <Stack.Screen name="August Activities" component={Aug_month} />
        <Stack.Screen name="September Activities" component={Sep_month} />
        <Stack.Screen name="October Activities" component={Oct_month} />
        <Stack.Screen name="November Activities" component={Nov_month} />
        <Stack.Screen name="December Activities" component={Dec_month} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;
