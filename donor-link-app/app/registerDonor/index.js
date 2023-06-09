import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'
import ScreenHeaderButton from '../../components/ScreenHeaderButton'
import TextComponent from '../../components/TextComponent'
import CustomActionButton from '../../components/CustomActionButton'
import CustomTextInput from '../../components/CustomTextInput'

const RegisterDonor = () => {
    const [dob, setDob] = useState('');
    const navigation = useRouter();

    const handleNext = () => {
        navigation.push('/registerDonor/process')
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#EEEEEE' },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <ScreenHeaderButton />
                    )
                }}
            />
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                <View>
                    <TextComponent text="To be a living organ donor you must be over the age of 18." />
                    <Text style={{ textAlign: 'center', marginTop: 5 }}>Please enter your date of birth.</Text>
                </View>
                <View>
                    <CustomTextInput label="Date of Birth" value={dob} setValue={setDob} placeholder="DD/MM/YYYY" />
                </View>
                <View>
                    <CustomActionButton handlePress={handleNext} text="Next" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterDonor