import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  // container for the homepage
  homepage: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'column',
  },

  eventsListImageBackground: {
    resizeMode: 'stretch',
    height: 100,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#ffffff'
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

  // wrapper for both "month" and "+" buttons
  wrapper: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  // month button
  month_button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
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
    position: 'absolute',
    color: '#fff',
  },

});