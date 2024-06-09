import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, TextInput, Button, Image, StyleSheet, ScrollView } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBarSection } from "../screenComponents/statusBarComponent";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const testImage = require('../imagesource/1.png');

export default AddData=()=> {

    const navigation = useNavigation();

    const [photoTitle, setPhotoTitle] = useState('');

    const HeaderSection=()=> {
        return (
            <>
                <View style={{flexDirection:'row', backgroundColor:'#297b91', height:50, justifyContent:'space-between'}}>

                    <TouchableOpacity style={{alignSelf:"center", marginLeft:10}} onPress={()=> navigation.goBack()}>
                        <Icon name="arrow-circle-left" size={25} color="#ffffff" />
                    </TouchableOpacity>

                    <Text style={{color:'white', alignSelf:'center', fontSize:18, margin:5, fontWeight:'normal'}}>Add Places</Text>
                    
                    <View></View>

                    {/* <View style={{alignContent:'flex-end', alignSelf:'center', flexDirection:'row'}}>     
                        <TouchableOpacity style={{alignSelf:'center', marginStart:15, marginEnd:15 }} onPress={()=> handleAddExpenseModal(true)}>
                            <Icon name='plus' size={25} color="#ffffff" />
                        </TouchableOpacity> 
                    </View> */}
                    
                </View>
            </>
        )
    }

    return (
        <SafeAreaView>
            <StatusBarSection />

            <HeaderSection/>

            <ScrollView>
                <View style={styles.baseView}>
                    <Text style={styles.fontStyle1}>Enter picture title: </Text>
                    <TextInput 
                        style={styles.input}
                        value={photoTitle}
                        onChange={(text)=> setPhotoTitle(text)}
                        keyboardType="default"
                        multiline
                        maxLength={50}
                        numberOfLines={2}
                    />

                    <TouchableOpacity style={styles.button1}>
                        <Text style={{color:'white', fontSize:15 }}>Click picture</Text>
                    </TouchableOpacity>

                    <View style={{margin:20, alignSelf:'center', shadowColor:'black', shadowOpacity:10 }}>
                        <Image source={testImage} style={{resizeMode:'center', height:200, }}/>
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView> 
    )
    
}

const styles = StyleSheet.create({
    baseView: {
        margin:10,
        marginTop:20,
    },
    fontStyle1: {
        color:'black', 
        fontSize:16, 
        fontWeight:'bold'
    },
    input: {
        height: 60,
        marginTop: 10,
        marginBottom:10,
        borderWidth: 1,
        padding: 10,
      },
    button1: {
        height:50,
        marginTop:10, 
        backgroundColor:'#297b91', 
        alignItems:'center',  
        justifyContent:'center', 
        borderRadius:5
    }

});


