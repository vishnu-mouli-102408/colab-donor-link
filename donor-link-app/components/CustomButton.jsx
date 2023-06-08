import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress}) => {
  return (
    <TouchableOpacity style={{width: 360, height: 80, border: '1px solid #838383', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#838383', fontWeight: 600}} onPress={handlePress}>{title}</TouchableOpacity>
  )
}

export default CustomButton