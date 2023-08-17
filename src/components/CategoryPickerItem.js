import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from './Icons';
import AppText from './AppText';

const CategoryPickerItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icons
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>

      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
    width: '35%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPickerItem;
