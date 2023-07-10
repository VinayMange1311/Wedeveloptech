import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

main: {
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
  },
  icon5:{
    height:350,
    width:400,
    alignSelf:'center'
  },
  location:{
    fontSize:27,
    color:"black",
    fontWeight:'bold',
    textAlign:'center',
    fontFamily:'Roboto-Bold'
  },
  sampleText:{
    fontSize:16,
    fontWeight:'500',
    color:'black',
    textAlign:'center',
    fontFamily:'Roboto-Regular',
    paddingHorizontal:40,
    paddingTop:20,
  },
  locationBtn:{
    height:50,
    backgroundColor:'#E30038',
    marginHorizontal:20,
    marginTop:40,
    borderRadius:8,
    justifyContent:'center',
  },
  btnText:{
    textAlign:'center',
    color:'white',
    fontFamily:'Roboto-Bold',
    fontSize:16,
  },
  pincodeBtn:{
    height:50,
    backgroundColor:'#00B951',
    marginHorizontal:20,
    marginTop:20,
    borderRadius:8,
    justifyContent:'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
},
iconMap:{
    height:100,
    width:100,
    alignSelf:'center',
    marginTop:50,
},
closeButtonText:{
    color:'black',
    textAlign:'center'
},
textInput:{
    height:40,
    borderWidth:0.7,
    marginHorizontal:20,
    marginTop:20,
    fontFamily:'Roboto-Regular',
    color:'black',
    borderColor:'rgba(52, 52, 52, 0.8)'
  },
  modalContainer:{
    height: '50%',
    marginTop: 'auto',
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
},
modalMainContainer:{
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)'
},

})
export default style;