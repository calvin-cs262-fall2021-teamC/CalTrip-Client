import { StyleSheet } from 'react-native';

export const eventStyles = StyleSheet.create({
  //General Content Container
  contentContainer: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: 20,
  },

  default: {
    flex: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-start'
  },

  eventViewTextContainer: {
    textAlign: 'left',
  },

  eventViewEventDescription: {
    padding: 5,
  },

  createEventContentContainer: {
    flex: 10,
    textAlign: 'center',
  },

  subTitle: {
    fontWeight: "bold",
  },

  inputBox: {
    marginVertical: 5,
    borderBottomColor: "#75022c",
    borderBottomWidth: 1,
  },
  
  createEventInputBox: {
    width: "100%",
    margin: 5,
    paddingHorizontal: 3,
  },

  bottomWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

});