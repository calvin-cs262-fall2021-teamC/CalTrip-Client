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

    signupLink: {
        fontSize: 22,
        position: 'relative',
        color: '#0000FF',
        marginTop:20,
        textDecorationLine: 'underline',
    },
    
      login_button_location: {
        width: 200,
        height: 50,
    },
    
});