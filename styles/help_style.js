/* help_style.js was created as a stylesheet for the help screen.
 * help_style.js was created by team CalTrip as a part of CS-262 at Calvin University. 
 *  The project was completed on 12/13/21.
 */
import { StyleSheet } from 'react-native';

export const helpStyles = StyleSheet.create({
  //General Content Container
  contentContainer: {
    flex: 1,
    paddingHorizontal: '3%',
    alignContent: 'center',
    marginBottom: '10%',
  },

  headerText: {
    marginTop: '5%',
    fontSize: 22,
    fontWeight: 'bold',
    position: 'relative',
    color: 'black',
  },

  bodyText1: {
    fontSize: 16,
    position: 'relative',
    color: 'black',
    paddingHorizontal: '5%',
    paddingVertical: '1%',
  },

  bodyText2: {
    fontSize: 16,
    position: 'relative',
    color: 'black',
    paddingHorizontal: '15%',
    paddingVertical: '0.1%',
  },

  bodyText3: {
    fontSize: 16,
    position: 'relative',
    color: 'black',
    paddingHorizontal: '25%',
    paddingVertical: '0.1%'
  },


});
