import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash-can-outline" color={colors.white} size={35} />
      </View>
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
    position: 'absolute',
    top: 15,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 15,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
});

export default ViewImageScreen;
