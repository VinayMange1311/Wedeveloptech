import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style';
import * as Images from '../../Assets/Icons/index'
import { useNavigation } from '@react-navigation/native';

const Termandcondition = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.main}>
      <Image source={Images.Icon4} style={style.Icon4}></Image>
      <View style={style.mainContainer}>
        <View style={style.mainConfirm} />
        <View style={style.innerMain}>
          <Text style={style.confirmText}>{"PLEASE"}</Text>
          <Text style={style.confirmText}>{"CONFIRM YOUR AGE"}</Text>
        </View>
      </View>
      <Text style={style.sampleText}>
        {"Want to get your favourite drinks delivered at your doorstep? All you have to do is tell us when were you born"}
      </Text>
      <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("Location")}>
        <Text style={style.btnText}>I AM ABOVE THE AGE OF 21</Text>
      </TouchableOpacity>
      <Text style={style.exit}>EXIT</Text>
      <Text style={style.termText1}>
        By entering this application, you hereby agree to the<Text style={style.termText2}> Terms Of Services</Text> and <Text style={style.termText3}>Privacy Policy</Text> of CheersByUnited
      </Text>
    </SafeAreaView>
  )
}

export default Termandcondition;