import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';

const PickerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
