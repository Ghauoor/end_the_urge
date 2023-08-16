import React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import colors from '../config/colors';

const AppTextInput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon name={icon} size={20} color={colors.medium} style={styles.icon} />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    borderRadius: 25,
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    flex: 1,
    color: colors.dark,
  },
});

export default AppTextInput;
