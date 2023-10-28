import { FC } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
      <Stack.Navigator initialRouteName="Start" screenOptions={{
        headerShown:false,
        // headerShadowVisible:false,
        // gestureEnabled:false
        }}>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Main" component={Main} options={{headerTitle:"Лист Задач", headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation