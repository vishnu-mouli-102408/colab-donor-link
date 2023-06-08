import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { Link, Stack, useNavigation } from 'expo-router'

const Onboarding = () => {
    const [userType, setUserType] = useState('')
    const navigation = useNavigation();

    const handleDonorPress = () => {
        setUserType('DONOR')
    }

    const handleRecipientPress = () => {
        setUserType('RECIPIENT')
    }

    const handleVerify = () => {
        if(userType === 'DONOR') {
            navigation('/signIn')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#EEEEEE', height: 0 },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100%'}}>
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
                    <Text style={{marginBottom: 40, fontSize: 18, fontWeight: 600, textAlign: 'center'}}>Are you a potential donor or are you a recipient?</Text>
                    <CustomButton title='Donor' handlePress={handleDonorPress} />
                    <CustomButton title='Recipient' handlePress={handleRecipientPress} />
                </View>
                <View>
                    <TouchableOpacity onPress={handleVerify} style={{ width: 360, height: 40, backgroundColor: '#87A7AE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#FFF', fontWeight: 700 }}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding