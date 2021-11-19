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
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  // month button
  month_button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    width: 335,
    height: 50,
    backgroundColor: '#75022c',
    borderRadius: 100,
  },

  // style for + button
  plusButton: {
    borderWidth: 1,
    borderColor: '#75022c',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#75022c',
    borderRadius: 100,
  },

  // text style of +
  plus: {
    fontSize: 35,
    fontWeight: 'bold',
    position: 'relative',
    color: '#fff',
  },

});