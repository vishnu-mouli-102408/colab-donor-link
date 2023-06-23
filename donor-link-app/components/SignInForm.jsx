
import React from 'react'
import {Link } from "expo-router"
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput , TouchableOpacity} from 'react-native'

const SignInForm = () => {

    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');


  return (
    <View style={{ marginTop:50, alignItems:'center'}}>
        <Text style={{ fontSize: 18 ,  fontWeight: 'bold'}} >Login</Text>
        <View >
          <Text style={{marginLeft:'-60px', fontSize:16}}>Email*</Text>
          <TextInput
          placeholder='ex. health123@gmail.com'
          style={{borderColor:"#899197" ,marginLeft:-60, height:30, width:300,marginRight:-76 , marginTop:5, borderRadius:8, padding:12, borderWidth:1}}
          onChangeText={setText}
          value={text}
          />
          <Text style={{marginLeft:'-60px', fontSize:16,  marginTop:8}}>Password*</Text>
         <TextInput
         style={{borderColor:"#899197" ,marginLeft:-60, height:30, width:300,marginRight:-76 , marginTop:5, borderRadius:8, padding:12, borderWidth:1}}
         secureTextEntry={true}
         placeholder='Enter your password'
         marginLeft={"-60"}
         value={password}
         onChangeText={setPassword}
          />
        </View>

        <View>
        <Link href='/email_Auth'>
        <TouchableOpacity style={{backgroundColor:'#E0E0E0', height:41 , width:300, marginLeft:15, marginTop:32, borderRadius:6 , alignItems:'center', paddingTop:10, fontSize:16}} >
        <Text style={{fontWeight:700}}>Login</Text>
        </TouchableOpacity>
        </Link>
        </View>
    </View>
  )
}

export default SignInForm
