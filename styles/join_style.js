/* join_style.js was created as a stylesheet for the join event screen.
 * join_style.js was created by team CalTrip as a part of CS-262 at Calvin University. 
 *  The project was completed on 12/13/21.
 */
import { StyleSheet } from 'react-native';

export const joinStyles = StyleSheet.create({
  //General Content Container
  contentContainer: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: 20,
  },

  //Join event
  joinEventContainer: {
    flex:10,
    textAlign: "center",
  },

  // Title of the event
  title: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20,
  },

  // Questions: rider/driver
  subTitle: {
    fontWeight: "bold",
    paddingTop: 5,
  },

  // Number of available seats
  joinEventPickerBox: {
     height: 40,
     width: 315,
     borderColor:"#75022c",
     borderWidth:1,
     alignSelf:"stretch",
     justifyContent:"center",
     borderRadius: 5,
     marginTop:10,
     marginBottom:30,
  },
  
  // For ID when joining event
  inputBox: {
    marginVertical: 5,
    borderBottomColor: "#75022c",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

});