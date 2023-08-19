import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';

import colors from '../config/colors';

const ImageInput = ({imageUri, onChangeImage}) => {
  const chooseFile = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 0.5,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      const selectedImage = response.assets[0];
      onChangeImage(selectedImage);
    });
  };

  const handlePress = () => {
    if (!imageUri) {
      chooseFile();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {text: 'YES', onPress: () => onChangeImage([])},
        {text: 'NO'},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.continer}>
        {!imageUri && <Icon name="camera" size={40} color={colors.medium} />}

        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  continer: {
    height: 100,
    width: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
