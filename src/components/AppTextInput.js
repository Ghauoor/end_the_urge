import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

const AppTextInput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
