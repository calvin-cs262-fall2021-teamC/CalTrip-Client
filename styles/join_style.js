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
    fontSize: 32,
    paddingBottom: 20,
  },

  // Questions: rider/driver
  subTitle: {
    fontWeight: "bold",
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
     marginTop:15,
     marginBottom:30,
  },
  
});