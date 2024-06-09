import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBarSection } from "../screenComponents/statusBarComponent";

export default Main=()=> {

    const HeaderSection=()=> {
        return (
            <>
                <View style={{flexDirection:'row', backgroundColor:'#297b91', height:50, justifyContent:'space-between'}}>
                    <Text style={{color:'white', alignSelf:'center', fontSize:18, margin:5, fontWeight:'normal'}}>Add Places</Text>
                    
                    <View style={{alignContent:'flex-end', alignSelf:'center', flexDirection:'row'}}>     
                        <TouchableOpacity style={{alignSelf:'center', marginStart:15, marginEnd:15 }} onPress={()=> handleAddExpenseModal(true)}>
                            <Icon name='plus' size={30} color="#ffffff" />
                        </TouchableOpacity> 
                    </View>
                    
                </View>
            </>
        )
    }

    return (
        <View>
            <StatusBarSection />

        <HeaderSection/>

        </View>
    )
    
}


