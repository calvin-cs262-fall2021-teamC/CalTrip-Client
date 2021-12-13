/* account_style.js was created as a stylesheet for the account screen.
 * account_style.js was created by team CalTrip as a part of CS-262 at Calvin University. 
 *  The project was completed on 12/13/21.
 */
import { StyleSheet } from 'react-native';

export const accountStyles = StyleSheet.create({
    
    account: {
        flex:1,
        flexDirection: 'column'
        // alignContent: 'center'
        },

    accountInfo: {
        alignItems: 'center',
        fontSize: 20,
    },

    accountInfoContainer: {
        flex: 10,
    },

    accountButtonContainer: {
      borderColor: '#75022c',
      
      flex: 1,
      paddingHorizontal: 50,
    }
});
