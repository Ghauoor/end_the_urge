import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import colors from '../config/colors';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can-outline" color={colors.white} size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
