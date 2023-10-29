import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import Start from "../screens/Start";
import Main from "../screens/Main";

export type IStack =  {
  Start:undefined
  Main:undefined
}

const Navigation:FC = () => {
  const Stack = createNativeStackNavigator<IStack>()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Main" component={Main} options={{headerTitle:"Лист Задач", headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation