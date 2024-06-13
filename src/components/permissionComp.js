import React from "react";

import { PermissionsAndroid, ToastAndroid } from "react-native";

export const RequestStoragePermission=async()=> {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.CAMERA,
            ]
            ,
            {
                title: 'Storage Permission',
                message: 'This app needs access to your storage to load images.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            }
        ).then((result) => {
            if (result['android.permission.READ_EXTERNAL_STORAGE']  === 'granted'
                && result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
            ) {
                console.log('permission granted..>>>>'+JSON.stringify(result))
                //alert('Permissions granted')
            } 
            else if (result['android.permission.READ_EXTERNAL_STORAGE'] === 'never_ask_again') {
              ToastAndroid.show('Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue', ToastAndroid.LONG);
            }
            else{
                alert('Permissions not granted')
            }
          });
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the storage');
        } else {
          console.log('Storage permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
}