import React, { useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Platform } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBarSection } from "../screenComponents/statusBarComponent";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen=()=> {

    const navigation = useNavigation();

    useEffect(()=> {

    }, []);

    const HeaderSection=()=> {
        return (
            <>
                <View style={{flexDirection:'row', backgroundColor:'#297b91', height:50, justifyContent:'space-between'}}>
                    <View></View>

                    <Text style={{color:'white', alignSelf:'center', alignItems:'center', alignContent:'center', fontSize:18, margin:5, fontWeight:'normal'}}>Favorite Places</Text>
                    
                    <View style={{alignContent:'flex-end', alignSelf:'center', flexDirection:'row'}}>     
                        <TouchableOpacity style={{alignSelf:'center', marginStart:15, marginEnd:15 }} onPress={()=> navigation.navigate('AddData') }>
                            <Icon name='plus' size={25} color="#ffffff" />
                        </TouchableOpacity> 
                    </View>
                    
                </View>
            </>
        )
    }

    return (
        <View>
            
            <StatusBarSection/>

            <HeaderSection/>

        </View>
    )
    
}


