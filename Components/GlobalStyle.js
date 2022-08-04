
import React from 'react'
import { StyleSheet } from 'react-native'

  
   export const GlobalStyle = StyleSheet.create({
      header:{
        marginBottom: 10,
        fontSize: 25,
        fontWeight: '700',
        color:'#444'
      },
      background:{
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'auto',
      },
      input:{
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 10,
        border: 'solid 1px #444',
    },
    imagesContainer: {
      marginTop: 10,
      backgroundColor: "#fff",
      borderRadius: 5,
      width: "10rem",
      paddingVertical: 8,
      paddingHorizontal: 5,
      flex: 1,
      marginHorizontal: 10,

    },
    title: {
      fontSize: 18,
      fontWeight: "500",
    },
    paragraph:{
      marginVertical: 20,
      fontSize: 20,
      marginHorizontal: 'auto'   
  },
  blur:{
    opacity: .5
  },
  btn:{
        paddingHorizontal: 20,
        backgroundColor: '#30A5BF',
        paddingVertical: 10,
        width: 100,
        borderRadius: 10,
        marginHorizontal: 'auto',
  },
  btnText:{
    justifySelf: 'center',
    color:'#fff',
    fontSize: 18,
}
    })
  


