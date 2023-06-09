import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { Link, Stack, useNavigation, useRouter } from 'expo-router'
import TextComponent from '../../components/TextComponent'
import CustomActionButton from '../../components/CustomActionButton'

const Onboarding = () => {
    const [userType, setUserType] = useState('')
    const navigation = useRouter();

    const handleDonorPress = () => {
        setUserType('DONOR')
    }

    const handleRecipientPress = () => {
        setUserType('RECIPIENT')
    }

    const handleVerify = () => {
        if(userType === 'DONOR') {
            navigation.push('/registerDonor')
        } else {
            navigation.push('/registerRecipient')
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
                <TextComponent text="Are you a potential donor or are you a recipient?" />
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 40}}>
                    <CustomButton title='Donor' handlePress={handleDonorPress} />
                    <CustomButton title='Recipient' handlePress={handleRecipientPress} />
                </View>
                <View>
                    <CustomActionButton handlePress={handleVerify} text="Verify" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding