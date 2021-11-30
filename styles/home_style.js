import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  // container for the homepage
  homepage: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'column',
    padding: 10,
  },

  eventsListImageBackground: {
    resizeMode: 'stretch',
    height: 100,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#ffffff',
  },
  
  textInsideContainer: {
    fontSize: 22,
    lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: '5%',
    textAlignVertical: 'bottom',
    color: 'white',
    backgroundColor: '#ffffff00',
  },

  // wrapper for both "+" button
  wrapper: {
    flex: 1,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf:'flex-end',
    marginBottom: '5%',
    marginLeft: '5%'
  },

  // // month button
  // month_button: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 40,
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: "center",
  //   width: '100%',
  //   height: 50,
  //   backgroundColor: '#75022c',
  //   borderRadius: 100,
  // },

  // style for + button
  plusButton: {
    flex: 1,
    borderWidth: 4,
    borderColor: '#fff',
    alignItems: 'center',
    width: 86,
    height: 71,
    backgroundColor: '#75022c',
    borderRadius: 70,
  },

  // text style of +
  plus: { 
    fontSize: 55,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf:'center',
    bottom: 3,
  },

});