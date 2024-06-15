import React from "react";

import {View, ActivityIndicator } from "react-native";

export const LoaderSection =()=> {
    return (
        <View style={{flex:1, alignItems:'center', alignContent:'center', justifyContent:"center"}}>
             <ActivityIndicator animating={true}  size="small" color="mediumblue" />
        </View>
    )
}