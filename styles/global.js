import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  default: {
    flex: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-start'
  },
  month_list: {
    paddingTop: 10,
  },
  month: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  // container for the homepage
  homepage: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'column',
  },

  // where the events go
  intro: {
    textAlign: 'center',
    justifyContent: 'flex-start'
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
  buttonv: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },

  // text style of +
  plus: {
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    color: '#fff',
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
  // __tried to set button style but couldn't get it to work
  // __had to hard code it in
  // login_button: {
  //   color: '#75022c',
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // marginTop: 15,
  },
  act_pic: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    alignItems: 'flex-start',
    top: 0,
  },
  eventTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    top: '30%',
  },
  eventDate: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#333',
    position: 'absolute',
    top: '40%',
  },
  eventDescription: {
    fontSize: 20,
    color: '#333',
    padding: 30,
    position: 'absolute',
    top: '50%',
  },
  account: {
  flex:1,
  // flexDirection: "column",
  // alignContent: 'center'
  },
  accountInfo: {
    alignItems: 'center',
    fontSize: 20,
  },
  profileButton: {
    borderWidth: 5,
    borderColor: '#75022c',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    // backgroundImage: "url(" + "https://c1.wallpaperflare.com/preview/558/669/73/puppy-yorkshire-terrier- puppy-yorkie-puppy-pet.jpg" + ")",
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    marginTop: '5%',
    marginBottom: '5%',

  },
  deleteAccountButton: {
    borderColor: '#FF0000',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginTop: '75%',
    paddingHorizontal: 50,
  },

  inputBox: {
    marginVertical: 5,
    borderBottomColor: "#75022c",
    borderBottomWidth: 1,
  },
  eventsListImageBackground: {
    resizeMode: 'stretch',
    height: 100,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#ffffff'
  },

  eventContainer: {
    flex: 1,
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
  //Event Description in view Event page
  eventViewEventDescription: {
    padding: 5,
  },

  eventViewTextContainer: {
    textAlign: 'left',
  },

  //Events Container in Events page
  eventsViewEventsContainer: {
    flex: 1,
  },

  //General Content Container
  contentContainer: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: 20,
  },

  bottomWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  createEventInputBox: {
    width: "100%",
    margin: 5,
    paddingHorizontal: 3,
  },

  createEventContentContainer: {
    flex: 10,
    textAlign: 'center',
  },

  title: {
    fontWeight: "bold",
    fontSize: 32,
    paddingBottom: 20,
  },

  subTitle: {
    fontWeight: "bold",
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

  //Join event

  joinEventContaier: {
    flex:10,
    textAlign: "center",
  },
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
