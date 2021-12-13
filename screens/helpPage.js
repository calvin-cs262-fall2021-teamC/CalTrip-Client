/*
 * help_page.js was created to present ‘help’ instructions to the user in the case that they don’t understand some functionality of the app.
 * Navigation [FROM] *.js [TO] *.js
 * help_page.js was created by team CalTrip as a part of CS-262 at Calvin University. The project was completed on 12/13/21.
*/

import React from 'react';
import { Image, View, Button, Text,  ScrollView } from 'react-native';
import { helpStyles } from '../styles/help_style';

/*
 * The function HelpScreen() creates a tutorial guide for using our application.
*/
export default function HelpScreen({ route, navigation }) {

  return (
    <View style={helpStyles.contentContainer}>
    <ScrollView>

       {/* Login/Signup tutorial */}
      <Text style={helpStyles.headerText}>Section 1: Login/Signup </Text>
      <Text style={helpStyles.bodyText1}>1. Sign up with a Calvin email address  </Text>
      <Text style={helpStyles.bodyText2}>a. Press the “Sign up” button </Text>
      <Text style={helpStyles.bodyText2}>b. Enter your information </Text>
      <Text style={helpStyles.bodyText2}>c. Press the “Create Account” button </Text>

       {/* Create event tutorial */}
      <Text style={helpStyles.headerText}>Section 2: Create event </Text>
      <Text style={helpStyles.bodyText1}>1. Press the “+” button in the bottom right corner of the screen  </Text>
      <Text style={helpStyles.bodyText1}>2. Enter the details of the event you want to create: </Text>
      <Text style={helpStyles.bodyText2}>a. Title, Description, Address, Estimated price, Start and end date, and Event category  </Text>
      <Text style={helpStyles.bodyText1}>3. Press the “Create Event” button at the bottom </Text>

       {/* View event tutorial */}
      <Text style={helpStyles.headerText}>Section 3: View event </Text>
      <Text style={helpStyles.bodyText1}>1. Go to the “Home” page  </Text>
      <Text style={helpStyles.bodyText1}>2. Press the event you want to view from the list of events </Text>
      <Text style={helpStyles.bodyText1}>3. You will be able to view the information regarding your event </Text>

       {/* Join event tutorial */}
      <Text style={helpStyles.headerText}>Section 4: Join event </Text>
      <Text style={helpStyles.bodyText1}>1. Press the event you want to join.  </Text>
      <Text style={helpStyles.bodyText1}>2. Press the “Join Event” button </Text>
      <Text style={helpStyles.bodyText1}>3. Determine your role: </Text>
      <Text style={helpStyles.bodyText2}>a. Driver - someone willing to drive others: </Text>
      <Text style={helpStyles.bodyText3}>i. When driver: select how many seats are available in your vehicle </Text>
      <Text style={helpStyles.bodyText2}>b. Rider - someone who wishes to ride with another user </Text>
      <Text style={helpStyles.bodyText1}>5. Press the “Join” button </Text>

       {/* My Account tutorial */}
      <Text style={helpStyles.headerText}>Section 5: My Account </Text>
      <Text style={helpStyles.bodyText1}>1. Press the button in the top right corner   </Text>
      <Text style={helpStyles.bodyText2}>a. View your account details </Text>
      <Text style={helpStyles.bodyText2}>b. Delete your account </Text>
      <Text style={helpStyles.bodyText3}>i. Press the “Delete Account” button </Text>

    </ScrollView>

    </View>
  );
}
