

import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IStack } from '../navigation/Navigation'

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  IStack,
  'Start'
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};
const Start = ({navigation}:Props) => {

  return (
    <View style={style.container}>
      <Pressable style={style.button} onPress={() => navigation.navigate("Main")}>
        <Text style={style.text}>Старт</Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFF',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{ 
    backgroundColor:'blue',
    borderRadius:8,
    paddingVertical:10,
    paddingHorizontal:20,   
  },
  text:{
    color:'#FFF',
    fontSize:20,
    fontWeight:'600'
  }
})

export default Start