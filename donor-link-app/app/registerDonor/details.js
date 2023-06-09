import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import TextComponent from '../../components/TextComponent'
import CustomTextInput from '../../components/CustomTextInput'
import CustomActionButton from '../../components/CustomActionButton'
import ScreenHeaderButton from '../../components/ScreenHeaderButton'

const Details = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        city: '',
        province: '',
        country: ''
    })

    const navigation = useRouter();

    const handleNext = () => {
        navigation.push('/registerDonor/anonimity')
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
                    <TextComponent text="Let's Start!" />
                    <TextComponent text="Please fill out the following." />
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                    <View>
                        <CustomTextInput value={userDetails.firstName} label="First Name" placeholder="ex. Mary" />
                    </View>
                    <View>
                        <CustomTextInput value={userDetails.middleName} label="Middle Name" placeholder="ex. Rose" />

                    </View>
                    <View>
                        <CustomTextInput value={userDetails.lastName} label="Last Name" placeholder="ex. Brown" />
                    </View>
                    <View>
                        <CustomTextInput value={userDetails.city} label="City" placeholder="ex. Toronto" />
                    </View>
                    <View>
                        <CustomTextInput value={userDetails.province} label="Province/State" placeholder="ex. ON" />
                    </View>
                    <View>
                        <CustomTextInput value={userDetails.country} label="Country" placeholder="ex. Canada" />
                    </View>
                </View>
                <View>
                    <CustomActionButton handlePress={handleNext} text="Next" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Details