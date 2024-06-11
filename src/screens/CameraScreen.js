import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Modal, Pressable, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { RNCamera, FaceDetector } from 'react-native-camera';

const RNFS = require('react-native-fs');

const testImage = require('../imagesource/1.png');

const imageURI = 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

export const CameraScreen=()=> { 

    const [modalVisible, setModalVisible] = useState(false);

    const [imageUri, setImageUri] = useState('');

    const takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };

          const data = await this.camera.takePictureAsync(options);
          
          console.log(data.uri);
          
          setImageUri(data.uri);

          if(data.uri != null) {
            setModalVisible(true);
          }
        }
    };

    const ModalSection=()=> {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { 
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}> 
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Image source={{uri: imageURI}} style={{resizeMode:'center', height:200, }}/>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>

            <StatusBar translucent backgroundColor='transparent' />

            <ModalSection/>

            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            />

            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={()=> takePicture()} style={styles.capture}> 
                    <Icon name="camera" size={30}/>
                </TouchableOpacity>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    centeredView: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        height:800,
        width:400,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
  });