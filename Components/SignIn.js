import React, {useState} from 'react'
import { ImageBackground, Text, StyleSheet, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import { GlobalStyle } from './GlobalStyle';

const SignIn = ({navigation}) => {
    const [number, setNumber]= useState('')
    const [password, setPassword]= useState('')

    const numberHandler =(e)=>{
        setNumber(e);
    }
    
    const passwordHandler =(e)=>{
        setPassword(e);
    }
  return (
    <ImageBackground source={require('../assets/bg-app-cloud.png')} style={GlobalStyle.background}>
        <View style={{marginHorizontal:10, marginTop:20}}>
      <Text style={GlobalStyle.header}>Sign in</Text>
      <Text>Sign in to continue to Cargo Express</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputText}>Phone Number/E-mail</Text>
        <TextInput style={GlobalStyle.input} onChangeText={numberHandler}/>
        <Text style={styles.inputText} >Password</Text>
        <TextInput style={GlobalStyle.input} onChangeText={passwordHandler}/>
        <Pressable style={GlobalStyle.paragraph} onPress={()=>navigation.navigate('user-type')}>
            <Text style={{color:'#30A5BF', fontSize: 20, fontWeight: '700', }}>
                 Create an account
            </Text>
            </Pressable>

            <View style={styles.btnView}>
                <TouchableOpacity style={GlobalStyle.btn} onPress={()=>navigation.navigate('dashboard')}>
                    <Text style={GlobalStyle.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    inputText:{
        fontSize: 15,
        marginVertical: 10,
    },
    inputWrapper:{
     marginTop: 20,  
     marginHorizontal: 10 
    },
    btnView:{
        marginTop: 30,
    }
})
export default SignIn
