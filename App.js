import React, {useState} from 'react';
import {View, StyleSheet, Button, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import ImageInput from './src/components/ImageInput';

const App = () => {
  const [filePath, setFilePath] = useState({});

  // const chooseFile = type => {
  //   let options = {
  //     mediaType: type,
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     quality: 1,
  //   };
  //   launchImageLibrary(options, response => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       alert('User cancelled camera picker');
  //       return;
  //     } else if (response.errorCode == 'camera_unavailable') {
  //       alert('Camera not available on device');
  //       return;
  //     } else if (response.errorCode == 'permission') {
  //       alert('Permission not satisfied');
  //       return;
  //     } else if (response.errorCode == 'others') {
  //       alert(response.errorMessage);
  //       return;
  //     }

  //     const selectedImage = response.assets[0];

  //     console.log('uri -> ', selectedImage.uri);
  //     console.log('width -> ', selectedImage.width);
  //     console.log('height -> ', selectedImage.height);
  //     console.log('fileSize -> ', selectedImage.fileSize);
  //     console.log('type -> ', selectedImage.type);
  //     console.log('fileName -> ', selectedImage.fileName);
  //     setFilePath(selectedImage);
  //   });
  // };

  return (
    <View>
      <ImageInput
        onChangeImage={uri => setFilePath(uri)}
        imageUri={filePath.uri}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
