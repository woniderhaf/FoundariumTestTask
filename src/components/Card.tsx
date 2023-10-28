




import { Text, StyleSheet, Pressable, View, Easing } from 'react-native'
import React, { FC } from 'react'
import { ICard } from '../interfaces/Card.interface'
import Animated,{FadeInUp, SlideInUp} from "react-native-reanimated"

const Card:FC<ICard> =  ({task,onCardPress}) => {

  console.log(task.card_id);
  

  return (
    <Animated.View
      entering={FadeInUp.duration(500)}
      style={[style.container,style.shadow]}
    >
      <Pressable
        onPress={() => onCardPress(task)}
      >
        <Text style={style.title}>{task.name}</Text>
      </Pressable>
    </Animated.View>

  )
  //end
}

const style = StyleSheet.create({
  container: {
    backgroundColor:'#FFF',
    marginTop:10,
    height:45,
    paddingVertical:10,
    paddingHorizontal:8,
    marginHorizontal:12,
    borderRadius:8
  },
  title:{ 
    color:'#000',
    fontSize:20,
    fontWeight:'500'
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 2.51,
    elevation: 10,
  }
})

export default Card