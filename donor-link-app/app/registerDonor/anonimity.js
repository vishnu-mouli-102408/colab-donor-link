import { Stack } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import ScreenHeaderButton from '../../components/ScreenHeaderButton'
import CustomActionButton from '../../components/CustomActionButton'
import Anominity from '../../assets/anomity.png'
import TextComponent from '../../components/TextComponent'

const Anonimity = () => {
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
                    <TextComponent text="Anon vs Non-Anon Feed" />
                    <Text style={{ textAlign: 'center', marginTop: 5 }}>Would you like to know the names of the recipients? </Text>
                </View>
                <View>
                    <Image source={Anominity} />
                </View>
                <View>
                    <CustomActionButton text="Next" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Anonimity