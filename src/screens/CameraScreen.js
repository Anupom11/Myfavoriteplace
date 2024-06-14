import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Modal, Pressable, Image, Platform } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import moment from "moment";

import { RNCamera, FaceDetector } from 'react-native-camera';

import { MoveAttachment, DeleteImgFile } from "../components/imageFileOp";
import { useNavigation } from "@react-navigation/native";

const RNFS = require('react-native-fs'); 

export const CameraScreen=()=> { 

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const [imageUri, setImageUri] = useState('');

    //-----------------------------------------------------------------
    const saveImageFile = async(fileUri) => {
      const dirHome = Platform.select({
        ios: `${RNFS.DocumentDirectoryPath}/FavoritePlace`,
        android: `${RNFS.DownloadDirectoryPath }/FavoritePlace`
      }); 

      const dirPicutures = `${dirHome}/Images`;

      const newImageName  = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
      const newFilepath   = `${dirPicutures}/${newImageName}`;

      setImageUri("file://"+newFilepath);   //<--- set the image uri for modal view

      MoveAttachment(fileUri, newFilepath, dirPicutures, resp=> { 
        if(resp) { 
          setModalVisible(true);
        }
      });

    }
    //------------------------------------------------------------------


    const takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };

          const data = await this.camera.takePictureAsync(options);
                  
          saveImageFile(data.uri);
        }
    }

    const ModalSection=()=> {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => { handleModalCloseOp(); }}>

          <View style={styles.centeredView}> 
            <View style={styles.modalView}>
                         
              <Image 
                source={{
                  uri: imageUri, 
                  height:600, 
                  width:350
                }}
                resizeMode={'contain'}
                resizeMethod={'resize'}
                onError={(e)=> console.log("Error:"+e.nativeEvent.error)}
              />

              <View style={{width:'100%', flexDirection:"row", justifyContent:"space-around", }}>
                <Pressable
                  onPress={()=> handleModalCloseOp()}>
                  <Icon name="close" size={30} color="white"/>
                </Pressable>

                <Pressable
                  onPress={()=> handleImgSelectionOp()}>
                  <Icon name="check" size={30} color="white"/>
                </Pressable>
                
              </View>

              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}

            </View>
          </View>

        </Modal>
      )
    }

    // method to handle the modal close operation
    const handleModalCloseOp=()=> {
      DeleteImgFile(imageUri);
      setModalVisible(false);
    }

    // method to handle the image selection button in the modal
    const handleImgSelectionOp=()=> {
      setModalVisible(false);
      navigation.navigate("AddData")
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
        width:'100%',
        margin: 10,
        backgroundColor: 'black',
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


