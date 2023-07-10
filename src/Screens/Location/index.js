import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import * as Icons from '../../Assets/Icons'
import AntDesign from 'react-native-vector-icons/AntDesign';
const Location = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <SafeAreaView style={style.main}>
            <Image source={Icons.Icon5} style={style.icon5}></Image>
            <Text style={style.location}>Enter Your Location</Text>
            <Text style={style.sampleText}>We are currently servicesable in selected locations.</Text>
            <TouchableOpacity style={style.locationBtn} onPress={() => { openModal() }}>
                <Text style={style.btnText}>Use Current Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.pincodeBtn}>
                <Text style={style.btnText}>Enter Pin code manually</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={style.modalMainContainer}>
                    <View
                        style={style.modalContainer}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <AntDesign name="closecircleo" size={25} color={"black"} style={style.closeButton} />
                        </TouchableOpacity>
                        <Image source={Icons.Icon1} style={style.iconMap}></Image>
                        <TextInput
                            style={style.textInput}
                            placeholder='Enter Pincode'
                            placeholderTextColor={'rgba(52, 52, 52, 0.8)'}
                        ></TextInput>
                        <TouchableOpacity style={style.pincodeBtn}>
                            <Text style={style.btnText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default Location;