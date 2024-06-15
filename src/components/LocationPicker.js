import React from "react";

import { Alert } from "react-native";

import GetLocation from "react-native-get-location";

export const GetLocationPicker=(callback)=> {

    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {    
        const locationVal = {
            lat: location.latitude,
            log: location.longitude
        }

        callback(locationVal);
    })
    .catch(error => {
        const { code, message } = error;
        Alert.alert('Error!',error.message);
        console.warn(code, message); 
    })
}