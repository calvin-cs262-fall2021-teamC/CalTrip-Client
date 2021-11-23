import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // marginTop: 15,
    },

    logo: {
        flex:4,
        width:"100%",
        height:"100%",
        resizeMode: "contain",
        paddingTop: 10,
        marginTop:20,
    },

    slogan: {
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'italic',
        position: 'relative',
        color: 'black',
    },

    loginInputContainer: {
        flex:6,
        width:"100%",
        marginTop: 80,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    loginInputBox: {
        width: "60%",
        paddingHorizontal: 3,
        marginTop:5,
    },
    
    loginInput: {
        marginVertical: 5,
        borderColor: "#75022c",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
    },

    signupButton: {
        fontSize: 20,
        position: 'relative',
        color: '#75022c',
        marginTop:"40%",
        width: 200,
        height: 50,
    },
    
      login_button_location: {
        marginTop: '2%',
        width: 100,
        height: 50,
    },
    
});