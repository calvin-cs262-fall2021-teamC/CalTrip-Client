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
