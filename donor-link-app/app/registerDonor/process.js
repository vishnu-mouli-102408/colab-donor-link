import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import ProcessImage from '../../components/ProcessImage';
import ScreenHeaderButton from '../../components/ScreenHeaderButton';
import CustomActionButton from '../../components/CustomActionButton';

const Process = () => {
  const navigation = useRouter();

  const handleUnderstand = () => {
    navigation.push('/registerDonor/details')
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
          <Text style={{fontWeight: 600, fontSize: 18}}>The Process</Text>
        </View>
        <View><ProcessImage /></View>
        <View>
          <CustomActionButton handlePress={handleUnderstand} text="I understand" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Process