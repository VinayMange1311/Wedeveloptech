import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icons, { Icon1, Icon2, Icon3 } from '../../Assets/Icons/index';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';

const Onboardingscreen = () => {
    const navigation = useNavigation();
    const slides = [
        {
            key: 'one',
            title: 'Enter Your Pincode',
            text: 'Enter your pincode to check the availability in your location.',
            image: Icon3,
            backgroundColor: '#59b2ab',
        },
        {
            key: 'two',
            title: 'Make Your Purchase',
            text: 'Choose the products of your choice and place the order.',
            image: Icon2,
            backgroundColor: '#febe29',
        },
        {
            key: 'three',
            title: 'CheersByUnited',
            text: 'We deliver the products right at your doorstep',
            image: Icon3,
            backgroundColor: '#22bcb5',
        }
    ];
    const [index, setIndex] = useState(0)
    const sliderRef = useRef()
    const Ondone = (params) => {
        let index = 0
        setIndex(prev => {
            index = prev + 1;
            return prev + 1
        })

        if (index === 3) {
            navigation.replace("Termandcondition")
        } else {
            sliderRef.current.goToSlide(index)
        }
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.8, }}>
                <Image source={item.image} style={style.iconImage}></Image>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.text}>{item.text}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={style.main}>
            <AppIntroSlider
                ref={sliderRef}
                data={slides}
                renderItem={renderItem}
                onDone={Ondone}
                showDoneButton={false}
                activeDotStyle={{ backgroundColor: '#969696' }}
                dotStyle={{ backgroundColor: '#E1E3E9' }}
                showNextButton={false}
            />
            <TouchableOpacity style={style.startBtn} onPress={() => Ondone()}>
                <Text style={style.btnText}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Onboardingscreen;