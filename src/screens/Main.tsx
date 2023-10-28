
import { Alert, FlatList, ListRenderItem, Platform, StyleSheet, Text, View } from 'react-native'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IStack } from '../navigation/Navigation'
import { getCards } from '../Helpers/Http';
import Card from '../components/Card';
import { AddCard } from '../Helpers/AddCard';
import Animated from 'react-native-reanimated';
import { ETaskTypes, ITask } from '../interfaces/ITask.interface';
import { Declination } from '../Helpers/Declination';
import { ICard } from '../interfaces/Card.interface';
import { IAddCard, TAddCard } from '../interfaces/AddCard.interface';

type ProfileScreenNavigationProp = NativeStackNavigationProp<IStack,'Main'>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Main = ({navigation}:Props) => {

  const filteredTasks = (tasks:ITask[]):ITask[] => {
    return tasks.filter(task => task.type === ETaskTypes.TASKS)
  }

  const [tasks,setTasks] = useState<ITask[]>([])

  const timer = useRef<any>(null)

  const TIME_INTERVAL = 10

  const requestData = useCallback(async () => {
    let page = 1
    timer.current = setInterval(() => request(), TIME_INTERVAL * 1000)
    const request = async() => {
      const [dataTasks,error] = await getCards<ITask>(`https://31c8211a72901c0f.mokky.dev/getCards?page=${page}`)
      
      if (dataTasks.length === 0 || error) {
        console.log(error);
        clearInterval(timer.current)
      } 
      else {
        page++
        setTasks(prevState =>  [...prevState, ...filteredTasks(dataTasks)])
      }
    }

    // 1 рендер
    request()
   
  },[])

  useEffect(() => {

    requestData()
    return () => {
      // одписываемся от таймера   
      clearInterval(timer.current)
    }


  },[])

  const CardClick = React.useCallback((item:ITask) => {
    Alert.alert(item.name,item.description ?? "нет описания")

    //  функция, которая отфильтровывает ненужные ключи
    const filterTask = (item:ITask):IAddCard => {
      const {card_id,photo_required,schedule,...returnItem} = item
      return returnItem
    } 
    
    AddCard(filterTask(item))
  },[])


  const checkProps = (prevProps:ICard,nextProps:ICard) => JSON.stringify(prevProps.task) === JSON.stringify(nextProps.task)
  
  const MemoCard = React.memo(Card,checkProps)

  const RenderItem = useCallback<ListRenderItem<ITask>>(({index,item,separators}) => 
    <MemoCard  onCardPress={(props) => CardClick(props)} key={item.card_id} task={item}/>
  ,[])

  const KeyExtractor = useCallback((item:ITask) => item.card_id.toString(),[])


  //return 
  return (
    <View style={{backgroundColor:'#FFF',flex:1}}>
      <FlatList
        // required 
        data={tasks}
        renderItem={RenderItem}
        // options
        keyExtractor={KeyExtractor}
        showsVerticalScrollIndicator={false}
        getItemLayout={(data,index) => (
          {length:40,offset:40*index, index}
        )}
        // style
        style={{flex:1,marginBottom:Platform.OS === 'ios'? 20 : 0}}
        // footer
        ListFooterComponent={() => <Text style={styles.componentTextStyle}>{`${tasks.length} ${Declination(tasks.length,['задача','задачи','задач'])}`}</Text>}
        ListFooterComponentStyle={styles.componentStyle}
      />
    </View>
  )
}



export default Main

const styles = StyleSheet.create({
  componentStyle:{
    margin:10
  },
  componentTextStyle: {
    fontWeight:'600',
    fontSize:20,
    textAlign:'center',
    color:"#000"
  }
})