/* event_style.js was created as a stylesheet for the events screen.
 * event_style.js was created by team CalTrip as a part of CS-262 at Calvin University.
 *  The project was completed on 12/13/21.
 */
import { StyleSheet } from 'react-native';

export const eventStyles = StyleSheet.create({
  //General Content Container
  contentContainer: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: 20,
  },

  default: {
    flex: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-start'
  },

  eventViewTextContainer: {
    textAlign: 'left',
  },

  eventViewEventDescription: {
    padding: 5,
    textAlign: "center"
  },

  createEventContentContainer: {
    flex: 10,
    textAlign: 'center',
  },

  subTitle: {
    fontWeight: "bold",
  },

  inputBox: {
    marginVertical: 5,
    borderBottomColor: "#75022c",
    borderBottomWidth: 1,
    paddingTop: 5,
  },

  createEventInputBox: {
    width: "100%",
    margin: 5,
    paddingHorizontal: 3,
  },

  bottomWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    height: 100
  },

  createEventPickerBox: {
     height: 25,
     width: '97%',
     margin: 8,
     borderColor:"#75022c",
     borderWidth:1,
     alignSelf:"stretch",
     justifyContent:"center",
     borderRadius: 5,
     marginTop:10,
     marginBottom:30,
  },

  createEventPickerItem: {
    backgroundColor: "grey",
  },

  joinedUsers: {
    textAlign: "center",
  }
});
