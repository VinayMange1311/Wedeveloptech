// import Customfont from "../../Assets/Fonts"
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

main: {
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
  },
  Icon4:{
    height:110,
    width:150,
    alignSelf:'center',
  },
  mainContainer:{
      alignItems: 'center',
      paddingHorizontal:40,
      marginTop:20,
  },
  mainConfirm:{
      height: 30,
      width: 30,
      backgroundColor: '#DE1F26',
      position: 'absolute',
      bottom: -15,
      transform: [{ rotate: '45deg' }],
  },
  innerMain:{
      paddingVertical: 12,
      backgroundColor: '#DE1F26',
      width: '100%',
      paddingHorizontal: 22,
  },
  confirmText:{
    color:'white',
    textAlign:'center',
    fontFamily:"Roboto-Bold",
    fontSize:20,fontWeight:'bold'
  },
  sampleText:{
    color:'rgba(52, 52, 52, 0.7)',
    paddingHorizontal:30,
    textAlign:'center',
    fontSize:15,
    paddingTop:30,
    fontFamily:'Roboto-Regular'
  },
  btn:{
    backgroundColor:'#E10038',
    height:45,
    marginHorizontal:20,
    borderRadius:8,
    justifyContent:'center',
    marginTop:20
  },
  btnText:{
    color:'white',
    textAlign:'center',
    fontSize:15,
  },
  exit:{
    color:'#E10038',
    fontSize:20,
    paddingTop:20,
    textAlign:'center',
    fontWeight:'bold',
  },
  termText1:{
    color:'rgba(52, 52, 52, 0.7)',
    textAlign:'center',
    paddingHorizontal:40,
    paddingTop:20,
    fontFamily:'Roboto-Regular'
  },
  termText2:{
    color:'#DC9864',
    textDecorationLine: 'underline',
  },
  termText3:{
    color:'#DC9864',
    textDecorationLine: 'underline',
  }
});
export { style }