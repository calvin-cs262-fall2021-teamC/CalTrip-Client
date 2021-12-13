/* signup_style.js was created as a stylesheet for the signup page.
 * signup_style.js was created by team CalTrip as a part of CS-262 at Calvin University.
 *  The project was completed on 12/13/21.
 */
import { StyleSheet } from 'react-native';

export const signupStyles = StyleSheet.create({
  //General Content Container
  contentContainer: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: 20,
  },

  createEventInputBox: {
    width: "100%",
    margin: 5,
    paddingHorizontal: 3,
  },

  subTitle: {
    fontWeight: "bold",
  },

  inputBox: {
    marginVertical: 5,
    borderBottomColor: "#75022c",
    borderBottomWidth: 1,
  },

  bottomWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  scrollViewHolder: {
    flex:7,
  }
});
