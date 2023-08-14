import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/images/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 10,
    left: 30,
    backgroundColor: colors.secondaryColor,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 10,
    right: 30,
    backgroundColor: colors.primaryColor,
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
});

export default ViewImageScreen;
