import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import BackLogo from './BackLogo'
import { useRouter } from 'expo-router'

const ScreenHeaderButton = () => {
  const navigation = useRouter();

  const handleBackNavigation = () => {
    navigation.back()
  }

  return (
    <TouchableOpacity onPress={handleBackNavigation}>
        <BackLogo />
    </TouchableOpacity>
  )
}

export default ScreenHeaderButton