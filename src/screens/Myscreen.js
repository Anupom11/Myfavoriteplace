import React, { useEffect } from 'react';
import { View, Image, StyleSheet, PermissionsAndroid, Platform, Alert } from 'react-native';

const requestStoragePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      console.log('Requesting permission...');
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your storage to load images.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the storage');
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

const checkPermission = async () => {
  if (Platform.OS === 'android') {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    if (!hasPermission) {
      requestStoragePermission();
    } else {
      console.log('Permission already granted');
    }
  }
};

const Myscreen = () => {
  useEffect(() => {
    checkPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'file:///storage/emulated/0/Download/MEGRAMS/Images/1251678_120624_1607928.jpg' }}
        style={styles.image}
        onError={(e) => console.log(e.nativeEvent.error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Myscreen;
