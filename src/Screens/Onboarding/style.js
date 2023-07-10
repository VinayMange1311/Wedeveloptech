// import Customfont from "../../Assets/Fonts"
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

  main: {
    flex: 1,
  },
  iconImage:{
    height:350,
    width:400,

  },
  title:{
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontSize: 25
  },
  text:{ 
    color: 'black',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20
  },
  startBtn:{
    height:50,
    backgroundColor:'#00B951',
    marginHorizontal:20,
    marginTop:20,
    borderRadius:8,
    justifyContent:'center',
    marginBottom:30,
    
  },
  btnText:{
    textAlign:'center',
    color:'white',
    fontFamily:'Roboto-Bold',
    fontSize:16,
  },

});
export { style };