import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AddData from "./screens/AddData";

export default function Main() {

    const stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home" >
                <stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} /> 
                <stack.Screen name="AddData" component={AddData} options={{headerShown:false}}    />
            </stack.Navigator>
        </NavigationContainer>
    )

}